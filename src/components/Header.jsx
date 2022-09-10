import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="flex items-center justify-between p-10">
      <Link to="/">
        <h1 className="font-bold text-[40px] text-[#542d2d]">BURGER STORE</h1>
      </Link>

      <Link to="/cart">
        <div className="border-solid border-black border-[1px] rounded-[50px] bg-[#EF8B4C]">
          <a className="flex items-center p-3" href="/">
            <p className="mr-1 font-bold">1000 руб</p>|
            <strong className="ml-1">23 шт</strong>
          </a>
        </div>
      </Link>
    </div>
  )
}

export default Header
