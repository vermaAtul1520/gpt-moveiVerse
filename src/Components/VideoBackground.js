import React from 'react';
import useTrailerVedio from '../Hooks/useTrailerVedio'
import { useSelector } from 'react-redux';

export const VideoBackground = ({moveiId}) => {
    const trailerVedio = useSelector(store => store?.moveis?.trailerVideo)
    useTrailerVedio(moveiId);
    return (
        <div className='w-full'>
            <iframe
                className='w-screen aspect-video'
                src={`https://www.youtube.com/embed/${trailerVedio?.key}?si=oXw7aF-phha18oDw?&autoplay=1&mute=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            >
            </iframe>
        </div>
  )
}
