import type { APIRoute } from 'astro';
import { z } from 'zod';
import sgMail from '@sendgrid/mail';

// Configure SendGrid
sgMail.setApiKey(import.meta.env.SENDGRID_API_KEY);

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(2, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  privacy: z.boolean().refine(val => val === true, 'You must accept the privacy policy')
});

export const POST: APIRoute = async ({ request }) => {
  try {
    // Parse request body
    const data = await request.json();
    
    // Validate input
    const validatedData = contactSchema.parse(data);

    // Prepare email
    const msg = {
      to: 'mehedikamal@gmail.com', 
      from: 'noreply@pivotport.com', 
      replyTo: validatedData.email,
      subject: `Contact Form: ${validatedData.subject}`,
      text: `
Name: ${validatedData.name}
Email: ${validatedData.email}
Subject: ${validatedData.subject}

Message:
${validatedData.message}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${validatedData.name}</p>
<p><strong>Email:</strong> ${validatedData.email}</p>
<p><strong>Subject:</strong> ${validatedData.subject}</p>
<p><strong>Message:</strong></p>
<p>${validatedData.message.replace(/\n/g, '<br>')}</p>
      `
    };

    // Send email
    await sgMail.send(msg);

    return new Response(JSON.stringify({
      message: 'Thank you for your message. We will get back to you soon!'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Contact form error:', error);
    
    return new Response(JSON.stringify({
      message: error instanceof z.ZodError 
        ? 'Please check your input and try again.' 
        : 'Something went wrong. Please try again later.'
    }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
