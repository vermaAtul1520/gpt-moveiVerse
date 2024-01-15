import { useEffect } from 'react'

import {API_OPTIONS} from '../Utils/Constant'
import { addNowPlayingMoveis} from '../Utils/moveiSlice'
import { useDispatch, useSelector } from 'react-redux'

const useNowPlayingMoveis = () => {
    const disPatch = useDispatch();
    const nowPlayingData = useSelector(store => store?.moveis?.nowPlayingMoveis);

    const nowPlayingMovei = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing', API_OPTIONS);
        const parsedData = await data.json();
        disPatch(addNowPlayingMoveis(parsedData?.results));
    }

    useEffect(() => {
        !nowPlayingData && nowPlayingMovei();
    }, [])

    return {}
}

export default useNowPlayingMoveis;