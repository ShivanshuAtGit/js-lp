import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { fullName, email, contactNumber } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jagransamrat@gmail.com', // replace with your Gmail
      pass: 'Yas@2610' // replace with your Gmail password or app-specific password
    }
  });

  try {
    await transporter.sendMail({
      from: 'jagransamrat@gmail.com',
      to: 'dharmendrapandit078@gmail.com',
      subject: `New Contact Form Submission from ${fullName}`,
      text: `Name: ${fullName}\nEmail: ${email}\nContact Number: ${contactNumber}`
    });
    NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    NextResponse.json({ message: 'Error sending email' });
  }
}
