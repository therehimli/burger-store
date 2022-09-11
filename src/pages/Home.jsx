import React from 'react'
import Burger from '../components/Burger'
import Category from '../components/Category'
import Pagination from '../components/Pagination'

const Home = () => {
  return (
    <div>
      <Category />
      <Burger />
      <Pagination />
    </div>
  )
}

export default Home
