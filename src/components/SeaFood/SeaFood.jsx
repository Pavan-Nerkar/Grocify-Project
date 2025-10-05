import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgSeaFood from '../../assets/seafood-banner.jpg'

const SeaFood = () => {
  return (
    <div>
      <CategoryPage title="SeaFood" BgImage={BgSeaFood} categories={['SeaFood', 'Meat']} />
    </div>
  )
}

export default SeaFood
