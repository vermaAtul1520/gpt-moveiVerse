import { createSlice } from '@reduxjs/toolkit';


const moveiSlice = createSlice({
  name: 'counter',
  initialState:{
    nowPlayingMoveis: null,
  },
    reducers: {
        addNowPlayingMoveis: (state, actions) => {
            state.nowPlayingMoveis = actions.payload;
        }
    },
})

export const { addNowPlayingMoveis } = moveiSlice.actions
export default moveiSlice.reducer