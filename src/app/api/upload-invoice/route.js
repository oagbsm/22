import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export const runtime = 'nodejs'; // Ensure Node runtime for file system access

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get('invoice');

    if (!file) {
      return new Response(JSON.stringify({ error: 'No file provided' }), { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // create directory if not exists
    const invoicesDir = path.join(process.cwd(), 'public', 'invoices');
    await mkdir(invoicesDir, { recursive: true });

    const fileName = `${Date.now()}-${file.name}`;
    const filePath = path.join(invoicesDir, fileName);

    await writeFile(filePath, buffer);

    const fileUrl = `/invoices/${fileName}`;

    return new Response(JSON.stringify({ name: file.name, url: fileUrl }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Upload error:', err);
    return new Response(JSON.stringify({ error: 'Upload failed' }), { status: 500 });
  }
}
