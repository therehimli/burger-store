import React from 'react'
import { Link } from 'react-router-dom'
import CartProducts from '../components/CartProducts'
import { useSelector, useDispatch } from 'react-redux'
import { clearItem } from '../redux/Slices/cartSlice'
const Cart = () => {
  const dispatch = useDispatch()

  const { items, allPrice } = useSelector((state) => state.addCart)

  const totalItemCart = items.reduce((sum, item) => {
    return item.count + sum
  }, 0)

  function onClearItem() {
    if (window.confirm('Do you really want clear cart?')) {
      dispatch(clearItem())
    }
  }

  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <div className="flex justify-between items-center gap-80">
        <div className="flex items-center mr-10">
          <img width={80} height={80} src="/image/cart.png" alt="cart" />
          <h1 className="font-bold text-[50px] ">Cart</h1>
        </div>
        <div className="flex items-center gap-2   cursor-pointer ml-10">
          <svg
            className=""
            width="20px"
            height="20px"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.5 5H4.16667H17.5"
              stroke="#B6B6B6"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z"
              stroke="#B6B6B6"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.33337 9.16667V14.1667"
              stroke="#B6B6B6"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.6666 9.16667V14.1667"
              stroke="#B6B6B6"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h2
            onClick={() => onClearItem()}
            className=" text-[20px] text-[#c2c2c2] hover:text-black"
          >
            Clear cart
          </h2>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start gap-4">
        {allPrice ? (
          items.map((item) => <CartProducts {...item} key={item.id} />)
        ) : (
          <div className="flex flex-col justify-center items-center">
            <h1 className=" font-bold text-[35px] text-[#E59443]">
              Cart empty
            </h1>
            <p>Please add something to cart!</p>
          </div>
        )}
      </div>
      <div className="flex justify-between items-center gap-80">
        <h2 className="text-[25px] font-semibold">
          Product count: <span>{totalItemCart}</span>
        </h2>
        <h2 className="text-[25px] font-semibold">
          Total price: <span>{allPrice}$</span>
        </h2>
      </div>

      <div className="flex justify-between items-center gap-80 pb-4">
        <Link
          className="text-[20px] px-5 py-2 bg-[#EF8B4C] rounded-2xl font-bold"
          to="/"
        >
          <h2>Main page</h2>
        </Link>{' '}
        <Link
          className="text-[20px] px-5 py-2 bg-[#EF8B4C] rounded-2xl font-bold"
          to="/"
        >
          <h2>Pay</h2>
        </Link>
      </div>
    </div>
  )
}

export default Cart
