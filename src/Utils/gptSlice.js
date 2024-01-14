import { createSlice } from '@reduxjs/toolkit'

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        gptMoveis: null,
        moveiName: null
    },
    reducers: {
        toggleGptSearchView: (state, actions) => {
            state.showGptSearch = !state.showGptSearch
        },

        addMoveiResult: (state, actions) => {
            const { moveiName, gptMoveis } = actions.payload;
            state.moveiName = moveiName;
            state.gptMoveis = gptMoveis;
        }
    },
})

export const { toggleGptSearchView, addMoveiResult } = gptSlice.actions
export default gptSlice.reducer