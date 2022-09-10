import React from 'react'
import { setItems } from '../redux/Slices/SortSlice'
import { setItemNames } from '../redux/Slices/SortSlice'

import { useDispatch } from 'react-redux'

const Category = () => {
  const dispatch = useDispatch()

  const itemList = [' BURGERS', 'SODA', 'SOUCE', 'DESERT', 'VEGETARIAN']

  const itemsLink = ['Burger', 'Soda', 'Souce', 'Cheesecake']

  const onClickItems = (i) => {
    dispatch(setItems(itemsLink[i]))
    dispatch(setItemNames(itemList[i]))
  }

  return (
    <div className="flex items-center justify-between p-6">
      <div className="flex justify-between items-center">
        <ul className="flex gap-8 items-center">
          {itemList.map((item, i) => (
            <li
              key={i}
              onClick={() => onClickItems(i)}
              className="cursor-pointer text-[18px] font-bold bg-[#daa07c60] hover:bg-[#ce7741bb] rounded-2xl p-2 px-4"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Category
