/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { FormEvent, useState } from "react"
import TypeWriter from "./typewriter";


export const ContactForm = () => {
  const [isSubmitted, setSubmitted] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          name,
          email,
          message,
        }),
        headers: {
          'content-type': 'application/json',
        },
      })
      if (res.status === 200) {
        setSubmitted(true)
      }
    } catch (err: any) {
      console.error('Err', err)
    }
  }
  return (
    isSubmitted ? (
      <div className="font-serif  text-4xl text-center h-125 flex items-center">
       <div><TypeWriter text='Your message has been recieved!' speed={50}/></div> 
      </div>
    ) : (

      <form className="flex flex-col gap-5 items-center h-125 pt-10 font-sans"
        onSubmit={onSubmit}>
        <div className="flex flex-col gap-2 w-full">
          <label className="text-left">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text" placeholder="Sarah Paluszny" className="border-2 dark:border-1 p-2"></input>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label className="text-left">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email" placeholder="youremail@email.com" className="border-2 dark:border-1  p-2"></input>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label className="text-left">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border-2 dark:border-1 dark:border-white border-black p-2 h-50"></textarea>
        </div>
        <button type="submit" className="border-2 font-bold text-xl rounded-md w-1/2 hover:cursor-pointer hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-150 p-2">SUBMIT</button>
      </form>)

  )
}