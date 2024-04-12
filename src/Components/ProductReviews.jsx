import React from 'react'
import ProductReviewCard from './ProductReviewCard'
import "../styles/productReview.css"

const ProductReviews = ({ProductReviews}) => {
  return (
    <div className='ProductReviews'>
      {
        ProductReviews.map((item,index)=>{
            return <ProductReviewCard price={item.price} image={item.image} review={item.review} name={item.name} index={index} key={item.image}/>
        })
      }
    </div>
  )
}

export default ProductReviews
