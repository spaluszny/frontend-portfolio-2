import { NextRequest, NextResponse } from 'next/server'
import formData from 'form-data';
import Mailgun from 'mailgun.js'

export async function POST(request: NextRequest) {

    const mailgun = new Mailgun(formData);
    const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY || 'key-yourkeyhere'});
    const { name, email, message } = await request.json()


    mg.messages.create('sandbox-123.mailgun.org', {
        from: "Contact Form <contact@mg-paluszny.com>",
        to: ["sarah.paluszny@gmail.com"],
        subject: "Hello",
        text: `Hello,
        You have a new form entry from: ${name} ${email}. 
        ${message}`
      })
      .then(msg => console.log(msg)) // logs response data
      .catch(err => console.error(err)); // logs any error


}