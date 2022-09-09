import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SortingM } from '../redux/Slices/SortSlice'

const Category = () => {
  const sortBy = useSelector((state) => state.SortingSlice.sort)
  const dispatch = useDispatch()
  console.log(sortBy)
  return (
    <div className="flex items-center justify-between p-6">
      <div className="flex justify-between items-center">
        <ul className="flex gap-8 items-center">
          <li className="cursor-pointer text-[18px] font-bold bg-[#daa07c60] hover:bg-[#ce7741bb]  rounded-2xl p-2 px-4">
            CHIKEN BURGERS
          </li>
          <li className="cursor-pointer text-[18px] font-bold bg-[#daa07c60] hover:bg-[#ce7741bb] rounded-2xl p-2 px-4">
            VEGETARIAN
          </li>
          <li className="cursor-pointer text-[18px] font-bold bg-[#daa07c60] hover:bg-[#ce7741bb] rounded-2xl p-2 px-4">
            SOUCE
          </li>
          <li className="cursor-pointer text-[18px] font-bold bg-[#daa07c60] hover:bg-[#ce7741bb] rounded-2xl p-2 px-4">
            DESERT
          </li>
          <li className="cursor-pointer text-[18px] font-bold bg-[#daa07c60] hover:bg-[#ce7741bb] rounded-2xl p-2 px-4">
            SODA
          </li>
        </ul>
      </div>
      <div>
        <p>
          Sort by
          <span
            onClick={() => dispatch(SortingM(!sortBy))}
            className="text-red-600 underline decoration-red-700 cursor-pointer pl-2"
          >
            All
          </span>
        </p>

        {sortBy && (
          <div className="rounded-3xl m-4 shadow-md shadow-slate-700 p-3">
            <ul>
              <li className="p-3 cursor-pointer  hover:bg-[#ce774179]">All</li>
              <li className="p-3 cursor-pointer  hover:bg-[#ce774179]">
                Price
              </li>
              <li className="p-3 cursor-pointer hover:bg-[#ce774179]">
                Popularty
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Category
