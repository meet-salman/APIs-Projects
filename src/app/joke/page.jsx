"use client";

import Link from 'next/link';
import { useState } from 'react'

const page = () => {

    const [joke, setJoke] = useState("Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the science.");


    // Generate Joke Function
    const generateJoke = () => {
        fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political&type=single')
            .then(data => data.json())
            .then(item => setJoke(item.joke))
            .catch(err => console.log(err))
            .finally(setJoke("⟳"))
    }

    return (
        <>
            <div className='layout'>

                <h1 className='main_heading'> Random Joke Generator </h1>


                {/* API Link */}
                <Link target='blank' href="https://sv443.net/jokeapi/v2/" className='api_link'> &#8594; &nbsp; API Link </Link>


                {/* Joke Box */}
                <div className='w-[65vmin] p-10 text-center rounded-md bg-[#10234b]'>

                    <span className='text-5xl '> &#128514;  </span>

                    <p className='my-8 text-gray-200'> {joke} </p>

                    <button onClick={generateJoke} className="btn"> Generate Joke </button>

                </div>


                {/* Back to Home */}
                <Link href="/" className='back'> &#8592; &nbsp; Back </Link>

            </div>
        </>
    )
}

export default page