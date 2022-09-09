import React from 'react'

const Header = () => {
  return (
    <div className="flex items-center justify-between p-6">
      <h1 className="font-bold text-[40px] text-[#542d2d]">Burger store</h1>
      <div className="flex items-center border-solid border-black border-[1px] px-4 py-2 rounded-[15px]">
        <img width={20} height={20} src="/image/search.png" alt="search" />
        <input
          className="bg-transparent outline-none ml-1"
          type="text"
          placeholder="Search burger..."
        />
        <img
          className="cursor-pointer"
          width={20}
          height={20}
          src="/image/exit.svg"
          alt="close"
        />
      </div>
      <div className="border-solid border-black border-[1px] rounded-[50px] bg-[#EF8B4C]">
        <a className="flex items-center p-3" href="/">
          <p className="mr-1 font-bold">1000 руб</p>|
          <strong className="ml-1">23 шт</strong>
        </a>
      </div>
    </div>
  )
}

export default Header
