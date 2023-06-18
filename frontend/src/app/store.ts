import {configureStore } from  '@reduxjs/toolkit'


import themeReducer from '../features/theme/themeSlice'


const store = configureStore({
    reducer: {
        darkMode: themeReducer
    }
})

export default store
export type RootState = ReturnType<typeof store.getState >
export type AppDispatch = typeof store.dispatch