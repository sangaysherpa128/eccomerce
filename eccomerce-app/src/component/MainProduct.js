import React from 'react'
import ProductData from '../Data/ProductData'

function MainProduct() {
  return (
    <div>
      {ProductData.map((a)=>(
        a.category="Men's Clothing"
      ))}
    </div>
  )
}

export default MainProduct
