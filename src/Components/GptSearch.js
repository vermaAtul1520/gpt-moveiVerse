import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoveiSuggations from './GptMoveiSuggations'
import { useSelector } from 'react-redux'

const GptSearch = () => {
    const data = useSelector(store=>store?.gpt?.gptMoveis)
    return (
        <div className= {data?.length>0 ? '' : 'h-screen'}>
            <GptSearchBar />
            <GptMoveiSuggations />
        </div>
    )
}

export default GptSearch