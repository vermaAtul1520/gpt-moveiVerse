import React from 'react'
import { IMG_CDN_URL } from '../Utils/Constant'

const MoveiCard = ({movei}) => {
    console.log("moveis",movei)
  return (
      <div className='w-48 pr-4'>
          <img
              alt='Movei crd'
              src={IMG_CDN_URL + movei?.poster_path}
          />
      </div>
  )
}

export default MoveiCard