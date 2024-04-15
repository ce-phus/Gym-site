import React from 'react'
import CategoryCard from './CategoryCard'
import { Categories } from '../constants'

const Category = () => {
  return (
    <div className='container pt-20 ml-5 mt-12'>
      <h1 className='mt-10 mb-10 text-5xl font-bold flex items-center justify-center'>Explore our Programs To Shape You</h1>
      <CategoryCard data={Categories} />
    </div>
  )
}

export default Category