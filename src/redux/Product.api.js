import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const storeApi = createApi({
  reducerPath: 'burgersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62f1316425d9e8a2e7c7db4f.mockapi.io/',
  }),
  endpoints: (builder) => ({
    getBurgers: builder.query({
      query: ({ sortItems, page }) =>
        `burgers?filter=${sortItems}&page=${page}&limit=8`,
    }),
  }),
})
export const { useGetBurgersQuery } = storeApi
