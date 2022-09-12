import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  inputValue: '',
}

const ChangeInput = createSlice({
  name: 'input',
  initialState,
  reducers: {
    changeValue(state, action) {
      state.inputValue = action.payload
    },
  },
})

export const { changeValue } = ChangeInput.actions

export default ChangeInput.reducer
