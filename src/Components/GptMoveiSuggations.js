import React from 'react'
import { useSelector } from 'react-redux'
import MoveiList from './MoveiList';

const GptMoveiSuggations = () => {
  const { gptMoveis, moveiName } = useSelector(store => store?.gpt);

  if (!moveiName) return null;

  return (
    <div className='"p-4 mx-4 mt-4 sm:p-2 sm:mx-2" text-white bg-black bg-opacity-70 rounded-lg'>
      <div>
        {moveiName?.map((movei, idx) => {
          return (
            <div>
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