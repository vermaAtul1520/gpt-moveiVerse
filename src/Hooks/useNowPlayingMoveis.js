import { useEffect } from 'react'

import {API_OPTIONS} from '../Utils/Constant'
import { addNowPlayingMoveis} from '../Utils/moveiSlice'
import { useDispatch } from 'react-redux'

const useNowPlayingMoveis = () => {
    const disPatch = useDispatch();
    const nowPlayingMovei = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        const parsedData = await data.json();
        disPatch(addNowPlayingMoveis(parsedData?.results));
    }

    useEffect(() => {
        nowPlayingMovei();
    }, [])

    return {}
}

export default useNowPlayingMoveis;