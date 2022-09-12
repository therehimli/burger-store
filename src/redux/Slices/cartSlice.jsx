import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  allPrice: 0,
}

const addCart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    changeCart(state, action) {
      const findItem = state.items.find((item) => item.id === action.payload.id)

      if (findItem) {
        findItem.count++
      } else {
        state.items.push({ ...action.payload, count: 1 })
      }

      state.allPrice = state.items.reduce((sum, item) => {
        return item.price * item.count + sum
      }, 0)
    },
    minusItem(state, action) {
      const findItem = state.items.find((item) => item.id === action.payload)
      if (findItem) {
        findItem.count--
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    clearItem(state) {
      state.items = []
      state.allPrice = 0
    },
    minusPrice(state, action) {
      state.allPrice -= action.payload
    },
    removePrice(state, action) {
      state.allPrice -= action.payload
    },
  },
})

export const {
  changeCart,
  removeItem,
  clearItem,
  minusItem,
  minusPrice,
  removePrice,
} = addCart.actions

export default addCart.reducer
