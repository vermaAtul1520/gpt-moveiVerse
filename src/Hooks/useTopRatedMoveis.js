import { useEffect } from 'react'

import {API_OPTIONS} from '../Utils/Constant'
import { addtopRatedMoveis} from '../Utils/moveiSlice'
import { useDispatch, useSelector } from 'react-redux'

const useTopRatedMoveis = () => {
    const disPatch = useDispatch();
    const topRatedData = useSelector(store => store?.moveis?.topRatedMoveis);

    const topRatedMovei = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated', API_OPTIONS);
        const parsedData = await data.json();
        disPatch(addtopRatedMoveis(parsedData?.results));
    }

    useEffect(() => {
        !topRatedData && topRatedMovei();
    }, [])

    return {}
}

export default useTopRatedMoveis;