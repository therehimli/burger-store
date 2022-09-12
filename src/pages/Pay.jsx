import React from 'react'
import { Link } from 'react-router-dom'

const Pay = () => {
  return (
    <div className="flex items-center justify-center flex-col pt-[100px] pb-[140px]">
      <h1 className="mb-5 text-[50px]   text-center text-green-400 font-bold">
        Your order has been successfully received!
      </h1>
      <img width={200} height={200} src="image/firework.png" alt="firework" />
      <Link
        to="/"
        className="text-[20px] px-10 py-2 bg-[#EF8B4C] rounded-2xl font-bold mt-4"
      >
        <h2>Return</h2>
      </Link>
    </div>
  )
}

export default Pay
