import React, { useEffect } from 'react'
import { Header } from './Header'
import useNowPlayingMoveis from '../Hooks/useNowPlayingMoveis'
import MainContainer  from './MainContainer'
import SecondryContainer from './SecondryContainer'
import usePopulerMoveis from '../Hooks/usePopulerMoveis'

export const Browse = () => {
  useNowPlayingMoveis();
  usePopulerMoveis();
  
  return (
    <>
      <div className='bg-black'>
        <Header />
        <MainContainer />
        <SecondryContainer />
      </div>
    </>
  )
}
