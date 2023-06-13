import React from 'react'
import Footer from '../components/Footer/Footer'
import CartItem from '../components/CartItem/CartItem'
import { useCart } from '../context/cart-context'


export default function HomePage() {
  const { cart } = useCart()
  console.log(cart);
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <h4 className="mt-4 text-center display-4">You have <span id="number">({cart.length})</span> Products in cart right now</h4>
          <div>

          </div>
          <div className="mx-auto col-md-11">
            <div className="row py-4 products">
              {
                cart && cart.length > 0 ? cart.map((product) => {
                  return (
                    <div className="col-md-6">
                      <CartItem product={product} />
                    </div>
                  )
                }) : ""
              }



            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
