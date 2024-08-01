import { createSlice } from '@reduxjs/toolkit'

interface LanguageState {
  initLanguage: 'en' | 'vi'
  currentLanguage: 'en' | 'vi'
}

const initialState: LanguageState = {
  initLanguage: 'en',
  currentLanguage: 'en'
}

const languageSlice = createSlice({
  name: 'language',
  initialState: initialState,
  reducers: {
    changeLanguage(state, action) {
      state.currentLanguage = action.payload
    }
  }
})

export const { changeLanguage } = languageSlice.actions
export default languageSlice.reducer
