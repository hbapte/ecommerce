import BannerComponent from '@/components/club/Banner'
import ProductCollection from '@/components/club/Jersey'
import { ProductShowcaseComponent } from '@/components/product-showcase'
import React from 'react'

function CategoryPage() {
  return (
    <>
     <BannerComponent />
    <ProductCollection />
    <ProductShowcaseComponent />

    </>
  )
}

export default CategoryPage