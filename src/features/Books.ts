import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import Books from "../interfaces/Books"

const initialState: Array<Books> = []

export const BooksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(getBooks.fulfilled, (state, action) => {
            action.payload ?
                state.push(action.payload) : null
        })
    },
})

export const getBooks = createAsyncThunk("/books/getBooks",
    async payload => {
        // getBooks DB controller
        return null
    }
)

export default BooksSlice.reducer