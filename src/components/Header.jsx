import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const { items, allPrice } = useSelector((state) => state.addCart)
  const totalItem = items.reduce((sum, item) => item.count + sum, 0)
  return (
    <div className="flex items-center justify-between p-10">
      <Link to="/">
        <div className="flex items-center gap-2">
          <img width={60} height={60} src="/image/burger-logo.png" alt="logo" />
          <h1 className="font-bold text-[40px] text-[#542d2d]">BURGER STORE</h1>
        </div>
      </Link>

      <Link to="cart">
        <div className="border-solid border-black border-[1px] rounded-[50px] bg-[#EF8B4C]">
          <div className="flex items-center p-3">
            <p className="mr-2 font-bold ml-2">{allPrice}$</p>|
            <strong className="ml-2 mr-2">{totalItem}</strong>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Header
