import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'
function ProductList() {
    const {products} = useSelector((state)=>state.product)
    console.log(products)
  return (
   <div className=" container mx-auto py-8">
      <h1 className="text-center mb-12 text-2xl font-normal leading-wide">
        JUST FOR YOU
      </h1>
      <div className="grid grid-cols-3 gap-6">
 {products.map((product)=>(
    <ProductCard product={product} />
 ))}
      </div>
    </div>
  )
}

export default ProductList
