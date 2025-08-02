/* eslint-disable @typescript-eslint/no-explicit-any */
import FormData from 'form-data'
import Mailgun from 'mailgun.js'
import { NextRequest, NextResponse } from 'next/server'

const API_KEY = process.env.MAILGUN_API_KEY || ''
const DOMAIN = process.env.MAILGUN_DOMAIN || ''

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    console.log('Data', body)

    const mailgun = new Mailgun(FormData)
    const client = mailgun.client({ username: 'api', key: API_KEY })

    const { name, email, message } = body

    const messageData = {
      from: "Mailgun Sandbox <postmaster@sandbox78914d951f2a4c81a7781763b909006c.mailgun.org>",
      to: ["Sarah Paluszny <sarah.paluszny@gmail.com>"],
      subject: 'New Contact Form!',
      text: `Hello,

      You have a new form entry from: ${name} ${email}.

        ${message}
      `,
    }

    const emailRes = await client.messages.create(DOMAIN, messageData)
    console.log(emailRes)

    return NextResponse.json({ submitted: true }, { status: 200 })

  } catch (err: any) {
    console.error('Error sending email', err)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}