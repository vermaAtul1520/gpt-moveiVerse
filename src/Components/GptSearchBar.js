import React, { useEffect, useState } from 'react'
import { lang } from '../Utils/LangContant'
import { useDispatch, useSelector } from 'react-redux'
import { useRef } from 'react';
import openai from '../Utils/openAi';
import { API_OPTIONS, MOVEI_FROM_CONST } from '../Utils/Constant';
import { addMoveiResult } from '../Utils/gptSlice';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { CiMicrophoneOff } from "react-icons/ci";
import { CiMicrophoneOn } from "react-icons/ci";

const GptSearchBar = () => {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();


    const disPatch = useDispatch();
    const language = useSelector((store) => store?.config?.lang);
    const [inputValue, setInputValue] = useState('');

    useEffect(()=>{
        setInputValue(transcript);
    },[transcript])

    const gptMoveis = async (movei) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='
            + movei +
            '&include_adult=false&language=en-US&page=1',
            API_OPTIONS
        )
        const json = await data.json();
        return json.results;
    }

    const handleGptSearch = async () => {
        const querry = "Act as a movei recomendation system and suggest some movei for querry " +
           inputValue +
            " give me result comma seprated for example Gadar,Commando,Mela,Animal,Dulhe raja"
            ;

        // gpt search......
        // const gptResults = await openai.chat.completions.create({
        //     messages: [{ role: 'user', content: querry }],
        //     model: 'gpt-3.5-turbo',
        // });
        let type = 'hindi';
    
        if (inputValue?.toLowerCase()?.includes('funny')) {
            type = 'funny';
        }

        if (inputValue?.toLowerCase()?.includes('romantice')) {
            type = 'romantice';
        }

        if (inputValue?.toLowerCase()?.includes('crime')) {
            type = 'crime';
        }

        if (inputValue?.toLowerCase()?.includes('crime')) {
            type = 'crime';
        }

        if (inputValue?.toLowerCase()?.includes('random')) {
            type = 'random';
        }

        const promiseArray = MOVEI_FROM_CONST?.[type]?.map((movei) => {
            return (gptMoveis(movei));
        })

        const result = await Promise.all(promiseArray);
        setInputValue('')
        disPatch(addMoveiResult({ moveiName: MOVEI_FROM_CONST?.[type], gptMoveis: result }));
    }

    const handleMic = async () => {
        if (listening) { 
            SpeechRecognition.stopListening()
        }
        else { 
            SpeechRecognition.startListening() 
        }
    }

    return (
        <div className='pt-[45%] md:pt-[10%] flex justify-center align-item-center'>
            <form className='w-full md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
                <input
                    className='p-3 m-3 col-span-7 md:col-span-8'
                    type='text'
                    value={inputValue}
                    onChange={(e) => {
                        setInputValue(e.target.value);
                    }}
                    placeholder={lang[language].placeHolder}
                />
                {browserSupportsSpeechRecognition &&
                    <button onClick={handleMic}
                        className='col-span-1 m-auto '>
                        {listening ? <CiMicrophoneOn color='white' size={25} />
                            :
                            <CiMicrophoneOff color='white' size={25} />
                        }
                    </button>
                }
                <button
                    onClick={handleGptSearch}
                    className='col-span-4 m-4 py-2 px-4 bg-red-700 text-white rounded-lg md:col-span-3'>
                    {lang[language].search}
                </button> 
            </form>
        </div>
    )
}

export default GptSearchBar