import React from 'react'
import { useParams } from 'react-router-dom'
import ProductData from '../Data/ProductData'

function Details() {
    let {cid}=useParams()
    let a=ProductData.find((a)=>a.id==cid)
  return (
    <div>
        <div className='container py-4 '>
      <div className='row'>
      <h3 className='text-center py-3'>Product Details.</h3>
       <div className='col-lg-12 py-5 d-flex justify-content-center'>
        <div className=" card text-center h-100 g-3 m-4" style={{width: '18rem'}}>
        <img src={a.image} className="card-img-top w-100" alt={a.title} height="250px" />
        <div className="card-body ">
          <h5 className="card-title mb-0">{a.title}</h5>
          <p className="card-text"><del className="text-muted">$15.99</del> &nbsp;${a.price}</p>
          <a href="#" className="btn btn-warning  text-uppercase rounded-pill ">Add to cart</a>
        </div>
      </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Details
