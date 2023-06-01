import React from 'react'
import Footer from '../components/Footer/Footer'
import CartItem from '../components/CartItem/CartItem'

export default function HomePage() {
  return (
    <div>
    <div className="container-fluid">
      <div className="row">
        <h4 className="mt-4 text-center display-4">You have <span id="number">(5)</span> Products in cart right now</h4>
        <div className="mx-auto col-md-11">
          <div className="row py-4 products">
            <div className="col-md-6">
              <CartItem />
            </div>
            <div className="col-md-6">
              <CartItem />
            </div>
            <div className="col-md-6">
              <CartItem />
            </div>
            <div className="col-md-6">
              <CartItem />
            </div>
            <div className="col-md-6">
              <CartItem />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  )
}
