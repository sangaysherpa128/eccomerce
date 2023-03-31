import React from 'react'
import Banner from '../component/Banner'
import Slider from '../component/Slider'
import {Routes,Route,Link} from "react-router-dom"


function Home() {
  return (
    <div>
      <Banner/>
      <Slider/> 
      
      {/* { <Routes>
      <Route path="/banner" element={<Banner />} />
      <Route path="/slider" element={<Slider />} />
      
      </Routes> } */}
      
    
    </div>
  )
 
}

export default Home
