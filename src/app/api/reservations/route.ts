import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD
  }
});

export async function POST(req: Request) {
  try {
    const formData = await req.json();
    
    // Send mail with defined transport object
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'calebchinkere@gmail.com',
      subject: 'New Room Reservation',
      html: `
        <h2>New Reservation Details</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phoneNumber}</p>
        <p><strong>Address:</strong> ${formData.address || 'Not provided'}</p>
        <p><strong>Room Type:</strong> ${formData.roomType}</p>
        <p><strong>Arrival:</strong> ${formData.arrival}</p>
        <p><strong>Departure:</strong> ${formData.departure}</p>
        <p><strong>Adults:</strong> ${formData.adult}</p>
        <p><strong>Children:</strong> ${formData.children}</p>
        <p><strong>Special Requests:</strong> ${formData.specialRequests || 'None'}</p>
      `
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
} 