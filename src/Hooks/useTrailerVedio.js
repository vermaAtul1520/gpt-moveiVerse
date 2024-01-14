import { useEffect } from 'react';
import {API_OPTIONS} from '../Utils/Constant' ;
import { useDispatch } from 'react-redux';
import {addtrailerVedio} from '../Utils/moveiSlice'

 const  useTrailerVedio = (moveiId) => {
    const disPatch = useDispatch();

    const getMoveiVedio = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${moveiId}/videos`, API_OPTIONS);
        const parsedData = await data.json();
        const filterData = parsedData?.results?.filter((obj) => obj?.type === "Trailer");
        const trailer = filterData?.length ? filterData?.[0] : parsedData?.results?.[0];

        disPatch(addtrailerVedio(trailer));
    }
    useEffect(()=>{
        if(moveiId){
            getMoveiVedio();
        }
    }, [moveiId])
}

export default useTrailerVedio;
