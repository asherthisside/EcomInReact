import React, { useState } from 'react'
import ProductCard from '../components/ProductCard/ProductCard'
import Sidebar from '../components/Sidebar/Sidebar'
import Footer from '../components/Footer/Footer'
import axios from 'axios'
import { useEffect } from 'react'

export default function HomePage() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    (async () => {
      try {
        // request data from data.json file
        const { data: { books } } = await axios.get("data.json")
        // console.log(books);
        setProducts(books)
      }
      catch (error) {
        // handle the error
        console.log(error);
      }
    })()
  }, [])


  //IIFE - Instantly Invoked function Expression 
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <div className="row py-4 products">
              {
                products.map((product) => {
                  return <div className="col-md-4" key={product.id}>
                    <ProductCard name={product.name} image={product.image} category={product.category} oldPrice={product.oldPrice} newPrice={product.newPrice} discount={product.discount} rating={product.rating} />
                  </div>
                })
              }
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
