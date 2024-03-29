import { createSlice } from '@reduxjs/toolkit';


const moveiSlice = createSlice({
  name: 'movei',
  initialState: {
    nowPlayingMoveis: null,
    trailerVideo: null,
    populerMoveis: null,
    topRatedMoveis: null,
    upComingMoveis: null
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

    addUpComingMoveis: (state, actions) => {
      state.upComingMoveis = actions.payload;
    },
  },
})

export const { addNowPlayingMoveis, addtrailerVedio, addPopulerMoveis, addtopRatedMoveis ,addUpComingMoveis} = moveiSlice.actions
export default moveiSlice.reducer