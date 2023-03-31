import React from 'react'

function Footer() {
  return (
    <footer className='container py-4 border-top col-lg-12'>
      <div className='Topfooter d-flex justify-content-between border-bottom'>
        <div className='footeritem1'>
          <h5>About Us</h5>
          <p>We know there are a lot of threa <br /> developers our but we pride into<br />  a firm in the industry.</p>
        </div>
        <div className='footeritem2'>
         <ul> <h5>Feature</h5>
          <li><a href="">About Us</a></li>
          <li> <a href="">Terms Condition</a></li>
          <li> <a href="">Best Products</a></li>
          </ul>
        </div>
        
        <div className='footeritem2'>
         <ul> <h5>General Links</h5>
          <li> <a href="">Blog</a></li>
        <li>  <a href="">Tracking Order</a></li>
          <li> <a href="">Become Seller</a></li>
          </ul>
        </div>
        <div className='footeritem3'>
         <ul> <h5>Helpful</h5>
          <li> <a href="">Flash Sale</a></li>
         <li> <a href="">FAQ</a></li>
         <li> <a href="">Support</a></li>
         </ul>
        </div>
      </div>
      <div className='bottomfooter d-flex  py-4 justify-content-between'>
        <div className='right d-flex gap-3'>
          <a href=''><i class="bi bi-facebook"></i></a>
          <a href=''><i class="bi bi-instagram"></i></a>
          <a href=''><i class="bi bi-youtube"></i></a>
          <span><p>©2022QuomodosoftAll rights reserved</p></span>
        </div>
        <div className='left'>
          <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg' alt="card"/>
        </div>
      </div>
    </footer >
    
    
    
    
 
    
  )
}

export default Footer
