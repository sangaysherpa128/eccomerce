import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ProductData from '../Data/ProductData';
function Slider() {
  return (
   <section className='container py-5'>
    <h4>Top Selling Products</h4>
  <div className='row'>
  <div className='col-lg-12 py-4'>
    
  <OwlCarousel className='owl-theme' loop margin={10} nav>
{ProductData.map((a)=>(
 <div className="card text-center h-100 p-4" style={{width: '18rem'}}>
 <img src={a.image} className="card-img-top w-100" alt={a.title} height="250px" />
 <div className="card-body">
   <h5 className="card-title mb-0">{a.title.substring(0,12)}</h5>
   <p className="card-text"><del className="text-muted">$15.99</del> &nbsp;${a.price}</p>
   <a href="#" className="btn btn-warning  text-uppercase rounded-pill ">Add to cart</a>
 </div>
</div>
 
))}    
 
  </OwlCarousel>
  </div>
  </div>
  
</section>

  )
}

export default Slider
