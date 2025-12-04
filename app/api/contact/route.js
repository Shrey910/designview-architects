import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Use SendGrid if API key is configured
    if (process.env.SENDGRID_API_KEY) {
      const sgMail = require('@sendgrid/mail');
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      
      const msg = {
        to: 'designview73@yahoo.com',
        from: 'noreply@designviewarchitects.com', // You'll need to verify this sender
        subject: `New Contact Form Message from ${body.name}`,
        text: `
          Name: ${body.name}
          Email: ${body.email}
          Phone: ${body.phone || 'Not provided'}
          Message: ${body.message}
        `
      };
      
      await sgMail.send(msg);
      return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
    }
    
    // Fallback to Gmail if configured
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const nodemailer = require('nodemailer');
      
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });
      
      const mailOptions = {
        from: body.email,
        to: 'designview73@yahoo.com',
        subject: `New Contact Form Message from ${body.name}`,
        text: `
          Name: ${body.name}
          Email: ${body.email}
          Phone: ${body.phone || 'Not provided'}
          Message: ${body.message}
        `
      };
      
      await transporter.sendMail(mailOptions);
      return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
    }
    
    // Log to console if no email service is configured
    console.warn('No email service configured. Logging message to console instead.');
    console.log('Contact form submission:', body);
    return NextResponse.json({ 
      message: 'Message received (but not emailed due to missing configuration)' 
    }, { status: 200 });
    
  } catch (error) {
    console.error('Error sending message:', error);
    return NextResponse.json({ error: 'Failed to send message: ' + error.message }, { status: 500 });
  }
}