import { useEffect } from 'react'

import {API_OPTIONS} from '../Utils/Constant'
import { addUpComingMoveis} from '../Utils/moveiSlice'
import { useDispatch, useSelector } from 'react-redux'

const useUpComingMoveis = () => {
    const disPatch = useDispatch();
    const upComingData = useSelector(store => store?.moveis?.upComingMoveis);

    const upComingMovei = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming', API_OPTIONS);
        const parsedData = await data.json();
        disPatch(addUpComingMoveis(parsedData?.results));
    }

    useEffect(() => {
        !upComingData && upComingMovei();
    }, [])

    return {}
}

export default useUpComingMoveis;