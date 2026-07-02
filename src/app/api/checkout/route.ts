import { NextResponse } from 'next/server';
import { createClient } from 'next-sanity';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'czcl29jz',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN
});

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;

    if (!file || !name || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 1. Upload the image to Sanity
    const buffer = Buffer.from(await file.arrayBuffer());
    const asset = await client.assets.upload('image', buffer, {
      filename: file.name
    });

    // 2. Create the student document
    const student = await client.create({
      _type: 'student',
      name: name,
      email: email,
      paymentStatus: 'pending',
      receiptImage: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: asset._id
        }
      }
    });

    return NextResponse.json({ success: true, student });
  } catch (error: any) {
    console.error("Sanity Upload Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
