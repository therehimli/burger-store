import { configureStore } from '@reduxjs/toolkit'
import { storeApi } from './Store.api'
import SortingSlice from './Slices/SortSlice'

export const store = configureStore({
  reducer: {
    [storeApi.reducerPath]: storeApi.reducer,
    SortingSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(storeApi.middleware),
})
