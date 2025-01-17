import React from 'react'
import "../styles/productReviewcard.css"
const ProductReviewCard = ({price,image,review,name,index}) => {
  return (
    <div className='ProductReviewCard'>
      <img src={image} alt={`${index} review`} />
      <h5>{review}</h5>
      <span>{name}</span>
      <b>{price}</b>
    </div>
  )
}

export default ProductReviewCard
