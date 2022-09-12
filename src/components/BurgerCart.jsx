import React from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { changeCart } from '../redux/Slices/cartSlice'

import { minusItem, minusPrice } from '../redux/Slices/cartSlice'

const BurgerCart = ({ title, price, imageUrl, id }) => {
  const cartItems = useSelector((state) =>
    state.addCart.items.find((item) => item.id === id)
  )

  const dispatch = useDispatch()

  const addedCount = cartItems ? cartItems.count : ''
  const onAddedCart = () => {
    const cart = {
      title,
      price,
      imageUrl,
      id,
    }
    dispatch(changeCart(cart))
  }

  function onMinusItem() {
    dispatch(minusItem(id))
    dispatch(minusPrice(price))
  }

  return (
    <div className="flex flex-col  justify-center transition-transform  items-center mx-5 hover:translate-y-[-3px] ">
      <img width={250} height={250} src={imageUrl} alt="product" />
      <h2 className="font-bold text-[20px] text-[#DD7639] ">{title}</h2>
      <p className="mt-2 font-semibold text-[23px] opacity-70">{price}$</p>
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={() => onAddedCart()}
          className="font-bold text-[#BA895C] text-[25px] cursor-pointer hover:text-[#673F35] pb-[5px]"
        >
          +
        </button>
        {addedCount ? (
          <button className="font-bold bg-[#BA895C] text-white rounded-full  px-3 py-1">
            {cartItems.count}{' '}
          </button>
        ) : (
          ''
        )}
        {addedCount ? (
          <button
            onClick={() => onMinusItem()}
            className="font-bold text-[#BA895C] text-[25px] cursor-pointer hover:text-[#673F35]  pb-[5px]"
          >
            -
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default BurgerCart
