import { configureStore } from '@reduxjs/toolkit'
import { storeApi } from './Product.api'
import SortingSlice from './Slices/SortSlice'
import ChangeInput from './Slices/inputValue'
import changePage from './Slices/paginationSlice'
import addCart from './Slices/cartSlice'

export const store = configureStore({
  reducer: {
    [storeApi.reducerPath]: storeApi.reducer,
    SortingSlice,
    ChangeInput,
    changePage,
    addCart,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(storeApi.middleware),
})
