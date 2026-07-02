import { NextResponse } from 'next/server';
import { createClient } from 'next-sanity';
import { cookies } from 'next/headers';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'czcl29jz',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Query Sanity for this student email
    const query = `*[_type == "student" && email == $email][0]`;
    const student = await client.fetch(query, { email });

    if (!student) {
      return NextResponse.json({ error: 'No account found with this email' }, { status: 404 });
    }

    // Set a simple HTTP-only cookie with the student's email for session handling
    cookies().set('student_email', student.email, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });

    return NextResponse.json({ success: true, status: student.paymentStatus });
  } catch (error: any) {
    console.error("Login Error:", error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
