import React from 'react'
import { useParams } from 'react-router-dom'
import ProductData from '../Data/ProductData'
import { Link } from 'react-router-dom'

function Category() {
  let{id}=useParams()
  let display=ProductData.filter((a)=>a.category==id)
  return (
    <div className='container py-4 '>
      <div className='row'>
      <h3 className='text-center py-2'>Product Of Your Choice.</h3>
      {display.map((item)=>(
        <div className=" card text-center h-100 g-3 m-4" style={{width: '18rem'}}>
        <img src={item.image} className="card-img-top w-100" alt={item.title} height="250px" />
        <div className="card-body ">
          <h5 className="card-title mb-0">{item.title.substring(0,12)}</h5>
          <p className="card-text"><del className="text-muted">$15.99</del> &nbsp;${item.price}</p>
          <Link to={`/details/${item.id}`} className="btn btn-warning  text-uppercase rounded-pill ">Add to cart</Link>
        </div>
       </div>
      ))}
      </div>
    </div>
  )
}

export default Category
