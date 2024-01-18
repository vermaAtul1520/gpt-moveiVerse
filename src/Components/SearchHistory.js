import React from 'react'
import { GrPowerReset } from "react-icons/gr";

const SearchHistory = ({setInputValue}) => {
  let historyArray = [];

  if (localStorage.getItem('history')) historyArray = JSON.parse(localStorage.getItem('history'));

  return (
    <div className='my-5 flex justify-center bg-black opacity-70 md:w-[50%] m-auto rounded-lg flex-wrap'>
        {historyArray?.map((val,idx)=>{
          return (
            <button 
            onClick={()=>setInputValue(val)}
            className='bg-white rounded-lg mx-2 px-1 my-2 flex justify-center items-center'>
              <GrPowerReset 
              color='black'
              width={20}
              />
              <h3 className='text-black ml-1'>{val}</h3>
            </button>)
        })}
    </div>
  )
}

export default SearchHistory