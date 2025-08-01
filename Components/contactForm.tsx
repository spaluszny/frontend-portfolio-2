"use client";

import { FormEvent, useState } from "react"


export const ContactForm = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const onSubmit = async(e: FormEvent) => {
        e.preventDefault()

        try{
            const res = await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify({
                    name, email, message
                }),
                headers: {
                    'content-type': 'application/json',

                }
            })
        }catch(err:any){
            console.error('err', err)
        }
    }
    return (
        <form className="flex flex-col gap-5 items-center"
            onSubmit={onSubmit}>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text" placeholder="Name" className="border-2 w-full p-2"></input>
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email" placeholder="Email" className="border-2 w-full p-2"></input>
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message" className="border-2 w-full p-2 h-50"></textarea>
            <button type="submit" className="border-2 w-1/4 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-150 p-2">Submit</button>
        </form>
    )
}