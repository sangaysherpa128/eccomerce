import React from 'react'

function Banner() {
  return (
    <div className='container'>
        <div className='row'>
       <div className="col-lg-12 py-2">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="w-100" src="https://istore.com.np/images/abt__yt_banners/5/hot_bag_banner.jpg" alt="..." />
          </div>
          <div className="carousel-item">
            <img className="w-100" src="https://istore.com.np/images/abt__yt_banners/3/BBq-Landing.jpg" alt="..." />
          </div>
          <div className="carousel-item">
            <img className="w-100" src="https://istore.com.np/images/abt__yt_banners/3/TulipsPHP.png" alt="..." />
          </div>
        </div>
      </div>

    </div>
    {/* { <div className='col-lg-3 py-2'>
        <div className='pic'>
        <img className='w-100 img-fluid' src='https://media.istockphoto.com/id/1434213804/photo/food-products-recommended-for-pregnancy-healthy-diet.jpg?s=1024x1024&w=is&k=20&c=46SF3OyA_2NlFXyR0NbFANhjILOQ_9wzZaQYc-BDCw4='/>
        </div>
        <div className=' pic py-2'>
        <img className='w-100 img-fluid' src='https://cdn.thewirecutter.com/wp-content/media/2022/09/androidphones-2048px-top-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=980&dpr=2'/>
        </div>

    </div> } */}

    </div>
    </div>
  )
}

export default Banner
