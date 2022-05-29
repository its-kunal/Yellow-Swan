import { configureStore } from '@reduxjs/toolkit'
import BooksReducer from "./features/Books"

const store = configureStore({
    reducer: {
        books: BooksReducer
    }
})
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch