import React from 'react'

const BurgerCart = ({ title, price, imageUrl }) => {
  return (
    <div className="flex flex-col  justify-center transition-transform  items-center mx-5 hover:translate-y-[-3px] ">
      <img width={250} height={250} src={imageUrl} alt="" />
      <h2 className="font-bold text-[20px] text-[#DD7639]">{title}</h2>
      <p className="mt-2 font-semibold text-[23px]">{price}$</p>
      <div className="flex items-center justify-between gap-3">
        <p className="font-bold text-[#BA895C] text-[25px] cursor-pointer hover:text-[#673F35]">
          +
        </p>
        <p className="font-bold text-[#BA895C] text-[25px] ">1</p>
        <p className="font-bold text-[#BA895C] text-[25px] cursor-pointer hover:text-[#673F35]">
          -
        </p>
      </div>
    </div>
  )
}

export default BurgerCart
