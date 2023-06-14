import React from 'react'
import { useCart } from '../../context/cart-context'

export default function CartItem({ product }) {
  const { id, name, image, category, oldPrice, newPrice, discount, quantity } = product

  const {cart, cartDispatch} = useCart();

  const quantityUp = (id) => {
      cartDispatch({
        type: "INCREMENT",
        payload: id
      })
  }

  const quantityDown = (id) => {
      cartDispatch({
        type: "DECREMENT",
        payload: id
      })
  }

  return (
    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      <div className="col p-4 d-flex flex-column position-static">
        <strong className="d-inline-block mb-2 text-primary-emphasis">{category}</strong>
        <h3 className="mb-2">{name}</h3>
        <h5>Rs. {newPrice}/-</h5>
        <div className="mb-1 text-warning"><del className='text-danger'>Rs. {oldPrice}/-</del> {discount}%</div>
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-primary" onClick={() => quantityDown(id)} disabled={quantity <= 1}>-</button>
          <button type="button" class="btn" disabled>{quantity}</button>
          <button type="button" class="btn btn-primary" onClick={() => quantityUp(id) }>+</button>
        </div>
      </div>
      <div className="col-auto d-none d-lg-block">
        <img src={image} alt="" height={220} />
      </div>
    </div>
  )
}
