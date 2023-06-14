import React from 'react'
import './productCard.css'
import { useCart } from '../../context/cart-context'
import { searchProductById } from '../../utils/findProductInCart'
import { useNavigate } from 'react-router-dom'

export default function ProductCard({ product }) {
  const { id, name, image, category, oldPrice, newPrice, discount, rating } = product

  const { cart, cartDispatch } = useCart();

  const addToCartHandler = () => {
    cartDispatch({
      type: "ADD_TO_CART",
      payload: product
    })
  }

  const navigate = useNavigate()
  const isProductInCart = searchProductById(cart, id)

  const goToCartHandler = () => {
    navigate("/cart")
  }

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
            <button type="button" className="btn btn-outline-primary" onClick={isProductInCart ? goToCartHandler : addToCartHandler}>
              {isProductInCart ? "Go to Cart" : "Add to Cart"}
            </button>
            <button type="button" className="btn btn-outline-danger">
              <i className="fa-solid fa-heart"></i>
            </button>
          </div>
          <small className="text-body-secondary"><i className="fa-solid fa-star"></i>&nbsp;{rating}</small>
        </div>
      </div>
    </div>
  )
}
