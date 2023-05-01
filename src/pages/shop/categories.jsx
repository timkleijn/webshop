import React from 'react'
import { PRODUCTS } from '../../products/products'
import { Product } from './product'

export const Categories = (props) => {

  const bakery = PRODUCTS.filter(product => {
    return product.category === 'Bakery'
  })

  const vegetables = PRODUCTS.filter(product => {
    return product.category === 'Vegetables'
  })

  const butchery = PRODUCTS.filter(product => {
    return product.category === 'Butchery'
  })

  const shelf = PRODUCTS.filter(product => {
    return product.category === 'Shelf'
  })

  const dairy = PRODUCTS.filter(product => {
    return product.category === 'Dairy'
  })

  return (
    
    <div className='w-full'>
    <h1 className='text-4xl font-bold text-primary px-4'>Bakkerij</h1>
    <div className='p-4 sm:p-0 w-full sm:w-auto lg:w-4/5 grid sm:grid-cols-1 lg:grid-cols-3 order-1 sm:order-none'>
    {bakery.map((product) => (
        <Product data={product} />
      ))}
      </div>

      <h1 className='text-4xl font-bold text-primary px-4 mt-10'>Groente & Fruit</h1>
    <div className='p-4 sm:p-0 w-full sm:w-auto lg:w-4/5 grid sm:grid-cols-1 lg:grid-cols-3 order-1 sm:order-none'>
    {vegetables.map((product) => (
        <Product data={product} />
      ))}
      </div>

      <h1 className='text-4xl font-bold text-primary px-4 mt-10'>Slagerij</h1>
    <div className='p-4 sm:p-0 w-full sm:w-auto lg:w-4/5 grid sm:grid-cols-1 lg:grid-cols-3 order-1 sm:order-none'>
    {butchery.map((product) => (
        <Product data={product} />
      ))}
      </div>

      <h1 className='text-4xl font-bold text-primary px-4 mt-10'>Zuivel & Eieren</h1>
    <div className='p-4 sm:p-0 w-full sm:w-auto lg:w-4/5 grid sm:grid-cols-1 lg:grid-cols-3 order-1 sm:order-none'>
    {dairy.map((product) => (
        <Product data={product} />
      ))}
      </div>

      <h1 className='text-4xl font-bold text-primary px-4 mt-10'>Voorraadkast</h1>
    <div className='p-4 sm:p-0 w-full sm:w-auto lg:w-4/5 grid sm:grid-cols-1 lg:grid-cols-3 order-1 sm:order-none'>
    {shelf.map((product) => (
        <Product data={product} />
      ))}
      </div>

      </div>
  )
}
