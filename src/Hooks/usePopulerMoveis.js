import { useEffect } from 'react'

import {API_OPTIONS} from '../Utils/Constant'
import { addPopulerMoveis} from '../Utils/moveiSlice'
import { useDispatch } from 'react-redux'

const usePopulerMoveis = () => {
    const disPatch = useDispatch();
    const populerMovei = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular', API_OPTIONS);
        const parsedData = await data.json();
        console.log("parsedData",parsedData)
        disPatch(addPopulerMoveis(parsedData?.results));
    }

    useEffect(() => {
        populerMovei();
    }, [])

    return {}
}

export default usePopulerMoveis;