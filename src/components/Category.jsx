import React from 'react'

const Category = () => {
  return (
    <div className="flex items-center justify-between p-6">
      <div className="flex justify-between items-center">
        <ul className="flex gap-8 items-center">
          <li className="cursor-pointer text-[18px] font-bold bg-[#daa07c60] hover:bg-[#ce7741bb]  rounded-2xl p-2">
            Chiken burgers
          </li>
          <li className="cursor-pointer text-[18px] font-bold bg-[#daa07c60] hover:bg-[#ce7741bb] rounded-2xl p-2">
            Vegetarian
          </li>
          <li className="cursor-pointer text-[18px] font-bold bg-[#daa07c60] hover:bg-[#ce7741bb] rounded-2xl p-2">
            Souce
          </li>
          <li className="cursor-pointer text-[18px] font-bold bg-[#daa07c60] hover:bg-[#ce7741bb] rounded-2xl p-2">
            Desert
          </li>
          <li className="cursor-pointer text-[18px] font-bold bg-[#daa07c60] hover:bg-[#ce7741bb] rounded-2xl p-2">
            Soda
          </li>
        </ul>
      </div>
      <div>
        <p>
          Sort by
          <span className="text-red-600 underline decoration-red-700 cursor-pointer pl-2">
            All
          </span>
        </p>
        <div className="rounded-3xl m-4 shadow-md shadow-slate-700 p-3">
          <ul>
            <li className="p-3 cursor-pointer  hover:bg-[#ce774179]">All</li>
            <li className="p-3 cursor-pointer  hover:bg-[#ce774179]">Price</li>
            <li className="p-3 cursor-pointer hover:bg-[#ce774179]">
              Popularty
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Category
