import React from 'react'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const moveis = useSelector(store => store.moveis?.nowPlayingMoveis);
    return (
        <div>MainContainer</div>
    )
}

export default MainContainer