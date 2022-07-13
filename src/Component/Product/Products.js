import React from 'react'
import ProductItem from '../ProductItems/ProductItem'

export default function Products() {
  return (
 
        <div className='row'>
            <div className='col-4'>
                <ProductItem></ProductItem>
            </div>
            <div className='col-4'>
                <ProductItem></ProductItem>
            </div>
            <div className='col-4'>
                <ProductItem></ProductItem>
            </div>
            <div className='col-4'>
                <ProductItem></ProductItem>
            </div>
        </div>
  
  )
}
