import { useEffect } from 'react'

import {API_OPTIONS} from '../Utils/Constant'
import { addPopulerMoveis} from '../Utils/moveiSlice'
import { useDispatch, useSelector } from 'react-redux'

const usePopulerMoveis = () => {
    const disPatch = useDispatch();
    const populerData = useSelector(store => store?.moveis?.populerMoveis);

    const populerMovei = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular', API_OPTIONS);
        const parsedData = await data.json();
        disPatch(addPopulerMoveis(parsedData?.results));
    }

    useEffect(() => {
        !populerData && populerMovei();
    }, [])

    return {}
}

export default usePopulerMoveis;