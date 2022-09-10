import React from 'react'
import { setItems } from '../redux/Slices/SortSlice'
import { setItemNames } from '../redux/Slices/SortSlice'
import { useDispatch, useSelector } from 'react-redux'
import { changeValue } from '../redux/Slices/inputValue'

const Category = () => {
  const [Category, setCategory] = React.useState(0)

  const itemList = [' BURGERS', 'SODA', 'SOUCE', 'DESERT']

  const itemsLink = ['Burger', 'Soda', 'Souce', 'Cheesecake']

  const onClickItems = (i) => {
    dispatch(setItems(itemsLink[i]))
    dispatch(setItemNames(itemList[i]))
    setCategory(i)
  }

  const dispatch = useDispatch()
  const value = useSelector((state) => state.ChangeInput.inputValue)

  return (
    <div className="flex items-center justify-between p-6">
      <div className="flex justify-between items-center">
        <ul className="flex gap-8 items-center">
          {itemList.map((item, i) => (
            <li
              key={i}
              onClick={() => onClickItems(i)}
              className={`cursor-pointer text-[18px] font-bold bg-[#daa07c60]  rounded-2xl p-2 px-4 ${
                i === Category ? 'bg-[#ce7741bb]' : ''
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
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
    </div>
  )
}

export default Category
