import React, { useEffect } from 'react'
import { Header } from './Header'
import useNowPlayingMoveis from '../Hooks/useNowPlayingMoveis'
import MainContainer  from './MainContainer'
import SecondryContainer from './SecondryContainer'
import usePopulerMoveis from '../Hooks/usePopulerMoveis'
import useTopRatedMoveis from '../Hooks/useTopRatedMoveis'
import useUpComingMoveis from '../Hooks/useUpComingMoveis'
import { useSelector } from 'react-redux'
import GptSearch from './GptSearch'

export const Browse = () => {
  const showGpt = useSelector(store=> store?.gpt?.showGptSearch)
  useNowPlayingMoveis();
  usePopulerMoveis();
  useTopRatedMoveis();
  useUpComingMoveis();
  return (
    <>
      <div>
        <Header />
        {showGpt ? <GptSearch /> :
          <>
            <MainContainer />
            <SecondryContainer />
          </>}
      </div>
    </>
  )
}
