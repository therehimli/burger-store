import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sort: true,
  sortByCat: '',
  items: '',
  itemsName: 'Burgers',
}

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    SortingM(state, action) {
      state.sort = action.payload
    },
    setSorting(state, action) {
      state.sortByCat = action.payload
    },
    setItems(state, action) {
      state.items = action.payload
    },
    setItemNames(state, action) {
      state.itemsName = action.payload
    },
  },
})

export const { SortingM, setSorting, setItems, setItemNames } =
  sortSlice.actions

export default sortSlice.reducer
