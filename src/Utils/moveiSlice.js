import { createSlice } from '@reduxjs/toolkit';


const moveiSlice = createSlice({
  name: 'counter',
  initialState:{
    nowPlayingMoveis: null,
    trailerVideo: null,
    populerMoveis:null
  },
  reducers: {
    addNowPlayingMoveis: (state, actions) => {
      state.nowPlayingMoveis = actions.payload;
    },

    addtrailerVedio: (state, actions) => {
      state.trailerVideo = actions.payload;
    },
    
    addPopulerMoveis: (state, actions) => {
      state.populerMoveis = actions.payload;
    },
  },
})

export const { addNowPlayingMoveis,addtrailerVedio,addPopulerMoveis } = moveiSlice.actions
export default moveiSlice.reducer