"use client";

import { useRouter } from 'next/navigation'
import { FaArrowLeft } from 'react-icons/fa6'


export default function BackButton() {
    const router = useRouter()

    return (
        <div className='max-width-lg'>
            <button type="button" onClick={() => router.back()}>
                <FaArrowLeft className="h-6 w-6 m-3 inherit  hover:opacity-60" />
            </button>
        </div>

    )
}



