import React from 'react'
import MoveiList from './MoveiList'
import { useSelector } from 'react-redux'

const SecondryContainer = () => {
  const moveiData = useSelector(store => store?.moveis) ;
  
  return (
    <div className='bg-black bg-opacity-75'>
      <div className='-mt-12 md:-mt-56 py-6 text-white  z-20 relative'>
        <MoveiList title={'Now Playing'} moveis={moveiData?.nowPlayingMoveis} />
        <MoveiList title={'Top Rated'} moveis={moveiData?.topRatedMoveis} />
        <MoveiList title={'Populer'} moveis={moveiData?.populerMoveis} />
        <MoveiList title={'Horrer'} moveis={moveiData?.nowPlayingMoveis} />
        <MoveiList title={'Up Coming'} moveis={moveiData?.upComingMoveis} />
      </div>
    </div>
  )
}

export default SecondryContainer