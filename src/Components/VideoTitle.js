import React from 'react'

export const VideoTitle = ({ title, overview }) => {

  return (
    <div className="w-screen aspect-video absolute pt-[20%] px-20 text-white bg-gradient-to-r from-black">
        <h1 className='text-3xl font-bold'>{title}</h1>
        <p className='py-6 w-1/4'>{overview}</p>
        <div className='my-4'>
            <button className='bg-white text-black p-4 px-8 rounded-lg hover:bg-opacity-90'>▶️ Play</button>
            <button className='bg-gray-500 mx-2 text-white p-4 px-8 rounded-lg'>ⓘ More Info</button>
        </div>
    </div>
  )
}
