"use client";

import Link from 'next/link';
import { useState } from 'react'

const page = () => {

    const apiUrl = "https://api.quotable.io/random";
    const [quote, setQuote] = useState({
        "content": "Nighttime is where the magic of coding truly happens; it's when the world quiets down that coders minds speak up",
        "author": "Salman Ahmed",
    });



    // Generate Joke Function
    const generateQuote = () => {
        fetch(apiUrl)
            .then(data => data.json())
            .then(item => setQuote(item))
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className='layout'>

                <h1 className='main_heading'> Random quote Generator </h1>

                {/* API Link */}
                <Link target='blank' href={apiUrl} className='api_link'> &#8594; &nbsp; API Link </Link>


                {/* Quote Box */}
                <div className='w-[65vmin] p-10 text-center rounded-md bg-[#6bbda9]'>

                    <p className='my-6 text-gray-900'> {`"${quote.content}"`} </p>

                    <p className='my-8 italic text-gray-700'> By {quote.author} </p>

                    <button onClick={generateQuote} className="btn"> Generate quote </button>

                </div>


                {/* Back to Home */}
                <Link href="/" className='back'> &#8592; &nbsp; Back </Link>

            </div>
        </>
    )
}

export default page