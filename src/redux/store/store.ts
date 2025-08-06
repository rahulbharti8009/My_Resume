import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../slice/themeSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
})

export type MyRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
