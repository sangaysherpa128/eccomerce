import React from 'react'
import { Routes, Route, NavLink,Link } from 'react-router-dom'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Home from '../Pages/Home'
import Shop from '../Pages/Shop'
import Blog from '../Pages/Blog'
import ProductCategory from '../Data/ProductCategory'
import MainProduct from './MainProduct'
import Category from './Category'
import Slider from './Slider'
import Details from './Details'
function Nav() {
    return (
        <>
        <section className='nav sticky-top'>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0  gap-4">
                            <li className="nav-item dropdown  align-items-center">
                                <NavLink className=" btn  btn-light nav-link dropdown-toggle " to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="bi bi-list "></i> Categories
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/slider">All Categories</Link></li>
                                    {ProductCategory.map((a)=>(
                                        <li><NavLink className="dropdown-item" to={`/category/${a.category}`}>{a.category}</NavLink></li>
                                    ))}
                                    
                                </ul>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/shop">Shop</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/pages">Pages</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/blog">Blog</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </section>
 <Routes>
 <Route path="/category/:id" element={<Category />} />
 <Route path="/details/:cid" element={<Details/>}/>
 <Route path="/slider" element={<Slider/>}/>
 <Route path="/" element={<Home />} />
 <Route path="/shop" element={<Shop />} />
 <Route path="/about" element={<About />} />
 <Route path="/blog" element={<Blog />} />
 <Route path="/contact" element={<Contact />} />
 </Routes>
 </>
    )
}

export default Nav
