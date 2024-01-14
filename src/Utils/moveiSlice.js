import { createSlice } from '@reduxjs/toolkit';


const moveiSlice = createSlice({
  name: 'counter',
  initialState:{
    nowPlayingMoveis: null,
    trailerVideo: null
  },
  reducers: {
    addNowPlayingMoveis: (state, actions) => {
      state.nowPlayingMoveis = actions.payload;
    },

    addtrailerVedio: (state, actions) => {
      state.trailerVideo = actions.payload;
    }
  },
})

export const { addNowPlayingMoveis,addtrailerVedio } = moveiSlice.actions
export default moveiSlice.reducer