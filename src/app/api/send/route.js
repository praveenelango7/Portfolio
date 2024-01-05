import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const apiKey = "RESEND_API_KEY";
const resendObject = new Resend(apiKey);
export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'Praveen <praveenlovely301@gmail.com>',
      to: ['praveenlovely301@gmail.com'],
      subject: 'Hello world',
      react: <>
      <p>Email Body</p>
      </>
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}