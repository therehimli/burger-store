import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sort: true,
}

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    SortingM(state, action) {
      state.sort = action.payload
    },
  },
})

export const { SortingM } = sortSlice.actions

export default sortSlice.reducer
