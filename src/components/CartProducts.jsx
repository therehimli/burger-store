import React from 'react'
import { useDispatch } from 'react-redux'
import {
  minusItem,
  removeItem,
  changeCart,
  minusPrice,
  removePrice,
} from '../redux/Slices/cartSlice'

const CartProducts = ({ id, imageUrl, title, price, count }) => {
  const dispatch = useDispatch()

  function onPlusItem() {
    dispatch(changeCart({ id }))
  }

  function onMinusItem() {
    dispatch(minusItem(id))
    dispatch(minusPrice(price))
  }

  function onRemoveItem() {
    dispatch(removeItem(id))
    dispatch(removePrice(price * count))
  }

  return (
    <div className="flex flex-col justify-start items-center">
      <div className="flex justify-between items-center mr-4">
        <div className="flex items-center ">
          <img width={100} height={100} src={imageUrl} alt="product" />
          <h3 className="font-semibold text-[25px] text-[#DD7639] ">{title}</h3>
        </div>

        <div className="flex justify-between items-center  mx-10 ">
          <button
            onClick={() => onPlusItem()}
            className="font-bold text-white px-2 py-[0.8px] rounded-full mt-1  bg-[#BA895C] text-[15px] cursor-pointer hover:text-[#673F35] mr-2"
          >
            +
          </button>
          <p className="text-[30px] cursor-pointer mr-2">
            {count ? count : dispatch(removeItem(id))}
          </p>
          <button
            disabled={count < 1}
            onClick={() => onMinusItem()}
            className="font-bold text-white px-2 py-[0.8px] rounded-full mt-1  bg-[#BA895C] text-[15px] cursor-pointer hover:text-[#673F35] "
          >
            -
          </button>
        </div>
        <strong className="text-[30px] mr-4">{price * count}$</strong>
        <svg
          onClick={() => onRemoveItem()}
          className="cursor-pointer opacity-30 hover:opacity-100 mr-4"
          width="28px"
          height="28px"
          viewBox="0 0 15 15"
          fill="#6e7274"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1.5 1.5L13.5 13.5M1.5 13.5L13.5 1.5" stroke="grey" />
        </svg>
      </div>
    </div>
  )
}

export default CartProducts
