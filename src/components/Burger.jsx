import React from 'react'
import { useGetBurgersQuery } from '../redux/Store.api'

import BurgerCart from './BurgerCart'

const Burger = () => {
  const { data, error, isLoading } = useGetBurgersQuery()

  return (
    <div className="p-4">
      <h2 className="text-[60px] font-bold text-[#E59443] p-4">Burgers</h2>
      <div className="flex justify-center flex-wrap">
        {error ? (
          <div className="flex flex-col items-center">
            <h1 className="text-[50px] text-[#E59443] align-center">
              Oh no, servers was error, please come late
            </h1>
            <img width={200} height={200} src="/image/sad.png" alt="sad" />
          </div>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          data.map((item) => (
            <BurgerCart
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          ))
        ) : null}
      </div>
    </div>
  )
}

export default Burger
