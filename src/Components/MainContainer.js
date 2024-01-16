import React from 'react'
import { useSelector } from 'react-redux'
import { VideoTitle } from './VideoTitle';
import { VideoBackground } from './VideoBackground';

const MainContainer = () => {
    const moveis = useSelector(store => store.moveis?.nowPlayingMoveis);
    if(!moveis) return;
    const mainMovei = moveis?.[0];
    const {original_title, overview ,id} = mainMovei;

    return (
        <div className='pt-[30%] md:pt-0 bg-black'>
            <VideoTitle
                title={original_title}
                overview={overview}
            />
            <VideoBackground moveiId={id}/>
        </div>
    )
}

export default MainContainer