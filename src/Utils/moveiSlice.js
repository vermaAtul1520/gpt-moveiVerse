import { createSlice } from '@reduxjs/toolkit';


const moveiSlice = createSlice({
  name: 'counter',
  initialState:{
    nowPlayingMoveis: null,
    trailerVideo: null,
    populerMoveis:null,
    topRatedMoveis:null
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

    addtopRatedMoveis: (state, actions) => {
      state.topRatedMoveis = actions.payload;
    },
  },
})

export const { addNowPlayingMoveis,addtrailerVedio,addPopulerMoveis,addtopRatedMoveis } = moveiSlice.actions
export default moveiSlice.reducer