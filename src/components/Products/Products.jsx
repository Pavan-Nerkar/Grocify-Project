import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import Category from '../Category/Category';
import ProductsList from '../ProductsList/ProductsList'
import Cards from '../Cards/Cards';
import Button from '../Button/Button'; 
import { Link } from 'react-router-dom';

const Products = () => {

    const categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'SeaFood'];
    const [activeTab, setActiveTab] = useState('All')

    let filteredItem = activeTab ==='All' ? ProductsList : ProductsList.filter(item=>item.category === activeTab);

    const renderCards = filteredItem.slice(0, 8).map(product=>{
        return(
             <Cards image={product.image} title={product.name} price={product.price}/>
        )
    })

  return (
    <section>
        <div className='max-w-[1400px] mx-auto px-10 py-20'>
            <Heading highlight="Our" heading="Products" />
            
            {/* tabs */}
            <div className='flex flex-wrap gap-10 justify-center mt-10'>
                {categories.map(categoty=>{
                    return(
                        <button key={categoty} 
                        className={`px-5 py-2 text-lg rounded-lg cursor-pointer 
                        ${activeTab === categoty ? 'bg-gradient-to-b from-orange-400 to-orange-500  text-white' : 'bg-zinc-100'}`}
                        onClick={()=>setActiveTab(categoty)}>
                            {categoty}
                        </button> )
                })}
            </div> 

            {/* Products Listing */}
            <div className='grid md:grid-cols-4 grid-cols-1 gap-9 mt-20'>
                {renderCards }
            </div>

            {/* Button View All */}
            <div className='mt-15 mx-auto w-fit'>
                 <Link to="/allproducts" className='bg-gradient-to-b from-orange-400 to-orange-500 
                        text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-orange-600 
                         transition-all duration-300 cursor-pointer'>View all</Link>
            
            </div>

        </div>
    </section>
  )
}

export default Products


