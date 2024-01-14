import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import moveiReducer from './moveiSlice'

const appStore = configureStore({
  reducer: {
    user: userReducer,
    moveis : moveiReducer
  }
})

export default appStore;