import ProductRecommendation from '@/components/products/Recommendation'
import SingleProduct from '@/components/products/SingleProductPage'
import React from 'react'

function SingleProductPage() {
  return (
    <div>
        <SingleProduct />
        <ProductRecommendation />
    </div>
  )
}

export default SingleProductPage