import React from 'react'
import { PRODUCTS } from '../../products/products'
import { Product } from './product'
import { Hero } from './hero'

export const Shop = () => {
  return (    
    <div>
      <Hero />
    <div className='relative max-w-7xl mx-auto flex' id='shop'>
        <div id="shop-scroll-anchor" className='absolute -top-40'></div>
        <div className='hidden lg:block lg:w-1/5'>
            <p className='font-semibold text-xl'>Categorieën</p>
        </div>
        <hero />
        <div className='p-4 lg:p-0 w-full lg:w-4/5 grid sm:grid-cols-2 lg:grid-cols-4'>
            {PRODUCTS.map((product) => (
        <Product data={product}/>
        ))}
        </div>
    </div>
    </div>
  )
}
