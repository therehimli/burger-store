import { configureStore } from '@reduxjs/toolkit'
import { storeApi } from './Store.api'
import SortingSlice from './Slices/SortSlice'
import ChangeInput from './Slices/inputValue'

export const store = configureStore({
  reducer: {
    [storeApi.reducerPath]: storeApi.reducer,
    SortingSlice,
    ChangeInput,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(storeApi.middleware),
})
