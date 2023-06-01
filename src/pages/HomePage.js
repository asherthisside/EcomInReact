import React from 'react'
import ProductCard from '../components/ProductCard/ProductCard'
import Sidebar from '../components/Sidebar/Sidebar'
import Footer from '../components/Footer/Footer'

export default function HomePage() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <div className="row py-4 products">
              <div className="col-md-4">
                <ProductCard />
              </div>
              <div className="col-md-4">
                <ProductCard />
              </div>
              <div className="col-md-4">
                <ProductCard />
              </div>
              <div className="col-md-4">
                <ProductCard />
              </div>
              <div className="col-md-4">
                <ProductCard />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}


// Name | Rating | Category | Price | Discounted price | Image