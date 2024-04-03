"use client";

import '@src/app/dictionary/style.css';
import { useState } from 'react';
import Link from 'next/link'

const page = () => {

    const [isError, setIsError] = useState(false);
    const [text, setText] = useState("");
    const [result, setResult] = useState([
        {
            "word": "apple",
            "phonetic": "/ˈæp.əl/",
            "phonetics": [
                {
                    "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/apple-uk.mp3"
                }
            ],
            "meanings": [
                {
                    "partOfSpeech": "noun",
                    "definitions": [
                        {
                            "definition": "A common, round fruit produced by the tree Malus domestica, cultivated in temperate climates."
                        }
                    ]
                }
            ]
        }
    ]);
    const [audio, setAudio] = useState(new Audio(result[0].phonetics[0].audio));


    // Search Word 
    const searchWord = (e) => {
        e.preventDefault();
        setText("");
        let statusP;

        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`)
            .then(res => {
                statusP = res.status;
                return res.json();
            })
            .then(data => {
                if (statusP === 200) {
                    setIsError(false);
                    setResult(data);
                    console.log(data);
                    setAudio(new Audio(data[0].phonetics[0].audio))
                } else {
                    setIsError(true)
                }
            })
            .catch(err => setIsError(true))
    }

    // Sound Play
    const playSound = () => {
        audio.play()
    }


    return (
        <>
            <div className='layout'>

                <h1 className='main_heading'> Dictionary </h1>


                {/* API Link */}
                <Link target='blank' href="https://sv443.net/jokeapi/v2/" className='api_link'> &#8594; &nbsp; API Link </Link>

                <div className="dictionary_box">

                    {/* Search */}
                    <form className='search_form' onSubmit={searchWord}>
                        <input
                            type="text"
                            value={text}
                            onChange={(e) => { setText(e.target.value) }}
                            placeholder="Type the word here..."
                        />
                        <button type='submit'>Search</button>
                    </form>


                    {/* Result */}
                    <div id="result">
                        {!isError ?
                            <>
                                <div className="word_box">
                                    <h3> {result[0].word} </h3>
                                    <button onClick={playSound}> &#128362; </button>
                                </div>

                                <div className="details">
                                    <p> {result[0].meanings[0].partOfSpeech} </p>
                                    <p> {result[0].phonetic} </p>
                                </div>

                                <p className="text-[#4c4c69]"> {result[0].meanings[0].definitions[0].definition} </p>
                                <p className="example"> {result[0].meanings[0].definitions[0].example || ""} </p>
                            </>
                            :
                            <h3 className="text-2xl text-center text-red-400 mt-14">Couldn't Find The Word</h3>
                        }

                    </div>

                </div>


                {/* Back to Home */}
                <Link href="/" className='back'> &#8592; &nbsp; Back </Link>

            </div >
        </>
    )
}

export default page