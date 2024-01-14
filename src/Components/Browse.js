import React, { useEffect } from 'react'
import { Header } from './Header'
import useNowPlayingMoveis from '../Hooks/useNowPlayingMoveis'
import MainContainer  from './MainContainer'
import SecondryContainer from './SecondryContainer'

export const Browse = () => {
  const nowPlayingData = useNowPlayingMoveis();
  return (
    <>
      <Header />
      <MainContainer/>
      <SecondryContainer/>
    </>
  )
}
