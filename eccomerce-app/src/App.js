import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Header from './component/Header'
import Top from './component/Top'
import Footer from './component/Footer'
import "./App.css"
import { Routes, Route, Link } from "react-router-dom";
import Nav from './component/Nav'
import Home from './Pages/Home'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Shop from './Pages/Shop'
import Details from './component/Details'
function App() {
  return (
    <>
      <Top/>
      <Header/>
      <Nav/>
     
     
      <Footer/>
      

    </>
  )
}

export default App
