import React from 'react'
import MoveiCard from './MoveiCard'

const MoveiList = ({ title, moveis }) => {
    
  return (
      <div className='px-6'>
        <h1 className='text-2xl font-bold py-2'>{title}</h1>
          <div className='flex overflow-x-scroll'>
              <div className='flex'>
                  {moveis?.map((movei) => {
                      return (<MoveiCard
                          key={movei?.id}
                          movei={movei} />)
                  })}
              </div>
          </div>
      </div>
  )
}

export default MoveiList