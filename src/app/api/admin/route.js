import { NextResponse } from "next/server";
import pool from "@/lib/db";
import bcrypt from "bcryptjs";

// Get all users (existing)
export async function GET() {
  try {
    const [rows] = await pool.execute(
      "SELECT id, name, email, role FROM users"
    );

    const users = rows.map((u) => ({
      ...u,
      documents: [],
    }));

    return NextResponse.json({ users });
  } catch (err) {
    console.error("Admin API GET error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// Create a new user (new)
export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const [existing] = await pool.execute("SELECT id FROM users WHERE email = ?", [email]);
    if (existing.length > 0) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    await pool.execute(
      "INSERT INTO users (name, email, password_hash, role) VALUES (?, ?, ?, 'user')",
      [name, email, passwordHash]
    );

    return NextResponse.json({ success: true, message: "User created successfully" });
  } catch (err) {
    console.error("Admin API POST error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
