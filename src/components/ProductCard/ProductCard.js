import React from 'react'
import './productCard.css'

export default function ProductCard(props) {
  const {name, image, category, oldPrice, newPrice, discount, rating} = props
  console.log(image);
  return (
    <div className="mb-4 card shadow-sm">
      <img className='thumbnail' src={image} alt="" />
      <div className="card-body">
        <h4>{name}</h4>
        <h6 className='text-success'>{category}</h6>
        <div className="price-section d-flex align-items-center">
          <span className='new_price'>Rs. {newPrice}/-</span>
          <span className='old_price'><del>Rs. {oldPrice}</del></span>
          <span className='discount'>({discount}%)</span>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-outline-primary"><i class="fa-solid fa-cart-shopping"></i></button>
            <button type="button" className="btn btn-outline-danger"><i class="fa-solid fa-heart"></i></button>
          </div>
          <small className="text-body-secondary"><i className="fa-solid fa-star"></i>&nbsp;{rating}</small>
        </div>
      </div>
    </div>
  )
}
