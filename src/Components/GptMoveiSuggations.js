import React from 'react'
import { useSelector } from 'react-redux'
import MoveiList from './MoveiList';

const GptMoveiSuggations = () => {
  const { gptMoveis, moveiName } = useSelector(store => store?.gpt);

  if (!moveiName) return null;

  return (
    <div className='p-4 m-4 text-white bg-black bg-opacity-90 rounded-lg'>
      <div>
        {moveiName?.map((movei, idx) => {
          return (
            <div className='bg-black'>
              <MoveiList
                key={movei}
                title={movei}
                moveis={gptMoveis?.[idx]} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default GptMoveiSuggations