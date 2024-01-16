import React from 'react'

export const VideoTitle = ({ title, overview }) => {

  return (
    <div className="w-screen aspect-video absolute pt-[22%] px-6 md:px-20 md:pt-[18%] text-white bg-gradient-to-r from-black">
        <h1 className='text-lg md:text-3xl font-bold'>{title}</h1>
        <p className='hidden md:block py-6 w-1/4'>{overview}</p>
        <div className='my-4'>
            <button className='bg-white text-black px-2 py-1 md:p-4 md:px-8 rounded-lg hover:bg-opacity-90'>▶️ Play</button>
            <button className='hidden md:inline-block bg-gray-500 mx-2 text-white p-4 px-8 rounded-lg'>ⓘ More Info</button>
        </div>
    </div>
  )
}
