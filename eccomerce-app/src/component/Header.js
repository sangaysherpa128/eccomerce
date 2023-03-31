import React from 'react'
import { Routes, Route, NavLink } from "react-router-dom";
function Header() {
  return (
    <>
        <div className="container-fluid my-1 ">
          <div className='row'>
            <div className='col-md-2 col-sm-12  my-3'>
          <NavLink className="navbar-brand" to="/">
            <img src="https://shopo.quomodothemes.website/assets/images/logo.svg" alt="Logo" />
          </NavLink>
          </div>
        <div className='col-md-6 col-sm-12   my-3 '>
          <div className=" input-group mb-3">
            <input type="text" class="form-control" placeholder="
            Search Product" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
              <span class="input-group-text bg-warning" id="basic-addon2">Search</span>
          </div>
          </div>
          <div className='col-md-4 col-sm-12 d-flex justify-content-end gap-4 my-3 iconItems'>
            <div className='icon'>
              <i class="bi bi-cart-fill fs-3"></i>
              <span className='span'>2</span>
            </div>
            <div className='icon'>
            <i class="bi bi-heart-fill fs-3"></i>
              <span className='span'>2</span>
            </div>
          </div>
          </div>
        </div>

    </>
  )
}

export default Header
