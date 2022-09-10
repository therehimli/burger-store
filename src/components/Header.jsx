import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { changeValue } from '../redux/Slices/inputValue'

const Header = () => {
  const dispatch = useDispatch()
  const value = useSelector((state) => state.ChangeInput.inputValue)
  return (
    <div className="flex items-center justify-between p-10">
      <Link to="/">
        <h1 className="font-bold text-[40px] text-[#542d2d]">BURGER STORE</h1>
      </Link>
      <div className="flex items-center border-solid border-black border-[1px] px-4 py-2 rounded-[15px] w-[300px] h-[35px]">
        <img
          className=""
          width={20}
          height={20}
          src="/image/search.png"
          alt="search"
        />
        <input
          value={value}
          onChange={(e) => dispatch(changeValue(e.target.value))}
          className="bg-transparent outline-none ml-1 w-[250px] h-[35px] "
          type="text"
          placeholder="Search burger..."
        />
        <img
          onClick={() => dispatch(changeValue(''))}
          className="cursor-pointer pl-2"
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
