import React from 'react'
import { lang } from '../Utils/LangContant'
import { useDispatch, useSelector } from 'react-redux'
import { useRef } from 'react';
import openai from '../Utils/openAi';
import { API_OPTIONS, MOVEI_FROM_CONST } from '../Utils/Constant';
import { addMoveiResult } from '../Utils/gptSlice';

const GptSearchBar = () => {
    const disPatch = useDispatch();
    const language = useSelector((store) => store?.config?.lang);
    const searchText = useRef(null);

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
        // console.log("gfdfghjkl",searchText?.current?.value);
        const querry = "Act as a movei recomendation system and suggest some movei for querry " +
            searchText?.current?.value +
            " give me result comma seprated for example Gadar,Commando,Mela,Animal,Dulhe raja"
            ;

        // gpt search......
        // const gptResults = await openai.chat.completions.create({
        //     messages: [{ role: 'user', content: querry }],
        //     model: 'gpt-3.5-turbo',
        // });
        let type = 'hindi';
        if (searchText?.current?.value?.toLowerCase()?.includes('funny')) {
            type = 'funny';
        }

        if (searchText?.current?.value?.toLowerCase()?.includes('romantice')) {
            type = 'romantice';
        }

        if (searchText?.current?.value?.toLowerCase()?.includes('crime')) {
            type = 'crime';
        }

        if (searchText?.current?.value?.toLowerCase()?.includes('crime')) {
            type = 'crime';
        }

        if (searchText?.current?.value?.toLowerCase()?.includes('random')) {
            type = 'random';
        }

        const promiseArray = MOVEI_FROM_CONST?.[type]?.map((movei) => {
            return (gptMoveis(movei));
        })

        const result = await Promise.all(promiseArray);
        searchText.current.value = null;
        disPatch(addMoveiResult({ moveiName: MOVEI_FROM_CONST?.[type], gptMoveis: result }));
    }

    return (
        <div className='pt-[10%] flex justify-center'>
            <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
                <input
                    ref={searchText}
                    className='p-4 m-4 col-span-9'
                    type='text'
                    placeholder={lang[language].placeHolder}
                />
                <button
                    onClick={handleGptSearch}
                    className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'>
                    {lang[language].search}
                </button>
            </form>
        </div>
    )
}

export default GptSearchBar