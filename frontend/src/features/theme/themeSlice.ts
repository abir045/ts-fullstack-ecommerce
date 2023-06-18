import {createSlice, PayloadAction} from '@reduxjs/toolkit'


interface ThemeState {
    isDarkMode : boolean
}


const initialState : ThemeState ={
    isDarkMode: false,
}


const themeSlice = createSlice({

  name: 'darkMode' ,
  initialState : initialState,
  reducers:  {
           
    toggleDarkMode: (state) => {
    state.isDarkMode = !state.isDarkMode
    }
  }
  
})

export default themeSlice.reducer
export const {toggleDarkMode} = themeSlice.actions ;


