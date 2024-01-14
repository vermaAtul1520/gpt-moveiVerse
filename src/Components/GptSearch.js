import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoveiSuggations from './GptMoveiSuggations'
import { BG_URL } from '../Utils/Constant'

const GptSearch = () => {
    return (
        <div>
            <div className="absolute -z-50">
                <img src={BG_URL}
                    alt='Logo' />
            </div>
            <GptSearchBar/>
            <GptMoveiSuggations/>
        </div>
    )
}

export default GptSearch