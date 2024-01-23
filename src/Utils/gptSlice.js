import { createSlice } from '@reduxjs/toolkit'

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        gptMoveis: null,
        moveiName: null,
        loading: null
    },
    reducers: {
        toggleGptSearchView: (state, actions) => {
            state.showGptSearch = !state.showGptSearch
        },

        addMoveiResult: (state, actions) => {
            const { moveiName, gptMoveis } = actions.payload;
            state.moveiName = moveiName;
            state.gptMoveis = gptMoveis;
        },

        setLoading: (state, actions) => {
            state.loading = actions.payload;
        }
    },
})

export const { toggleGptSearchView, addMoveiResult, setLoading } = gptSlice.actions
export default gptSlice.reducer