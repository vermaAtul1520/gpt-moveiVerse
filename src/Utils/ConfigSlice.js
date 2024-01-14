import { createSlice } from "@reduxjs/toolkit";

const ConfigSlice = createSlice({
    name: 'config',
    initialState: {
        lang: 'en'
    },
    reducers: {
        setLanguage: (state, actions) => {
            state.lang = actions.payload;
        }
    }
})

export const { setLanguage } = ConfigSlice.actions

export default ConfigSlice.reducer;