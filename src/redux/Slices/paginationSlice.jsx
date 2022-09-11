import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  page: 1,
}

export const pagination = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    changePage(state, action) {
      state.page = action.payload
    },
  },
})

export const { changePage } = pagination.actions

export default pagination.reducer
