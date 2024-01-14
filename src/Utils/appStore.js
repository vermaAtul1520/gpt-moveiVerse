import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import moveiReducer from './moveiSlice'
import gptReducer from './gptSlice'
import configReducer from './ConfigSlice'

const appStore = configureStore({
  reducer: {
    user: userReducer,
    moveis : moveiReducer,
    gpt : gptReducer,
    config : configReducer
  }
})

export default appStore;