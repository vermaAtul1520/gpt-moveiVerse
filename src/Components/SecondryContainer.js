import React from 'react'
import MoveiList from './MoveiList'
import { useSelector } from 'react-redux'

const SecondryContainer = () => {
  const moveiData = useSelector(store => store?.moveis) ;
  
  return (
    <div className='-mt-56 py-6 text-white  z-20 relative'>
      <MoveiList title={'Now Playing'} moveis={moveiData?.nowPlayingMoveis}/>
      <MoveiList title={'Treanding'} moveis={moveiData?.nowPlayingMoveis}/>
      <MoveiList title={'Populer'} moveis={moveiData?.populerMoveis}/>
      <MoveiList title={'Horrer'} moveis={moveiData?.nowPlayingMoveis}/>
      <MoveiList title={'Now Playing'} moveis={moveiData?.nowPlayingMoveis}/>
    </div>
  )
}

export default SecondryContainer