import { useEffect } from 'react'

import {API_OPTIONS} from '../Utils/Constant'
import { addtopRatedMoveis} from '../Utils/moveiSlice'
import { useDispatch } from 'react-redux'

const useTopRatedMoveis = () => {
    const disPatch = useDispatch();
    const topRatedMovei = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated', API_OPTIONS);
        const parsedData = await data.json();
        disPatch(addtopRatedMoveis(parsedData?.results));
    }

    useEffect(() => {
        topRatedMovei();
    }, [])

    return {}
}

export default useTopRatedMoveis;