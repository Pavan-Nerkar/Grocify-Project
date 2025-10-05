import React from 'react'
import Banner from '../Banner/Banner'
import ProductsList from '../ProductsList/ProductsList'
import Cards from '../Cards/Cards'

const CategoryPage = ({title, BgImage, categories=[]}) => {

  let filteredItems = categories.includes('All')
  ? ProductsList 
  : ProductsList.filter(item=> categories.includes(item.category))

    const renderProduct = filteredItems.map(product=>{
        return(
            <Cards image={product.image} title={product.name} price={product.price} />
        )
    })

  return (
    <div>
      <Banner title={title} BgImage={BgImage}/>
        <div className='grid md:grid-cols-4 grid-cols-1 gap-9 py-20 max-w-[1400px] mx-auto px-10'>
            {renderProduct}
        </div>

    </div>
  )
}

export default CategoryPage
