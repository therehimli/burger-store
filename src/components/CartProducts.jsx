import React from 'react'

const CartProducts = () => {
  return (
    <div>
      <div className="flex justify-between items-center gap-14">
        <div className="flex items-center gap-1">
          <img
            width={100}
            height={100}
            src="/image/desert/kitkat.png"
            alt="product"
          />
          <h3 className="font-semibold text-[25px]">Продукт</h3>
        </div>

        <div className="flex justify-between items-center gap-4">
          <p className="text-[30px] cursor-pointer">+</p>
          <p className="text-[30px] cursor-pointer">1</p>
          <p className="text-[30px] cursor-pointer">-</p>
        </div>
        <strong className="text-[30px]">40$</strong>
        <svg
          className="cursor-pointer opacity-30 hover:opacity-100"
          width="32px"
          height="32px"
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
