import React from 'react'
import { useGetBurgersQuery } from '../redux/Product.api'

import BurgerCart from './BurgerCart'
import { useSelector } from 'react-redux'
import Skeleton from './Skeleton'

const Burger = () => {
  const sortItems = useSelector((state) => state.SortingSlice.items)
  const sortItemName = useSelector((state) => state.SortingSlice.itemsName)
  const search = useSelector((state) => state.ChangeInput.inputValue)
  const page = useSelector((state) => state.changePage.page)
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8]

  const { data, error, isLoading } = useGetBurgersQuery({
    sortItems,
    page,
  })

  return (
    <div className="p-4">
      <h2 className="text-[60px] font-bold text-[#E59443] p-4">
        {sortItemName}
      </h2>
      <div className="flex justify-center flex-wrap">
        {error ? (
          <div className="flex flex-col items-center">
            <h1 className="text-[50px] text-[#E59443] align-center">
              Oh no, servers was error, please come late
            </h1>
            <img width={200} height={200} src="/image/sad.png" alt="sad" />
          </div>
        ) : isLoading ? (
          skeleton.map((_, i) => <Skeleton key={i} />)
        ) : data ? (
          data
            .filter((product) => {
              if (product.title.toLowerCase().includes(search.toLowerCase())) {
                return true
              }
              return false
            })
            .map((item) => <BurgerCart key={item.id} {...item} />)
        ) : null}
      </div>
    </div>
  )
}

export default Burger
