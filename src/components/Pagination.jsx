import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changePage } from '../redux/Slices/paginationSlice'

const Pagination = () => {
  const dispatch = useDispatch()
  const page = useSelector((state) => state.changePage.page)

  const onPagination = (num) => {
    dispatch(changePage(num))
  }

  const pagList = [1, 2, 3]
  return (
    <div className="flex gap-6 items-center py-6 pl-6 justify-center">
      <button
        className="font-bold text-[20px]"
        disabled={page <= 1}
        onClick={() => dispatch(changePage(page - 1))}
      >
        {'<'}
      </button>

      {pagList.map((num) => (
        <p
          onClick={() => dispatch(onPagination(num))}
          className={`text-[20px] cursor-pointer px-3 py-[1px]  rounded-full ${
            num === page ? ` bg-[#EF8B4C]  text-white` : ``
          }`}
        >
          {num}
        </p>
      ))}

      <button
        className="font-bold text-[20px]"
        disabled={page > 2}
        onClick={() => dispatch(changePage(page + 1))}
      >
        {'>'}
      </button>
    </div>
  )
}

export default Pagination
