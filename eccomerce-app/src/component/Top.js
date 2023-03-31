import React from 'react'
function Top() {
  return (
    <header className='container-fluid mainHeader border-bottom '>
      <div className='row'>
        <div className='col-md-6 col-sm-12 align-items-center d-flex justify-content-start  gap-5 py-3 headerTop '>
          <div><a href="">Account</a></div>
          <div><a href="">Track Order</a></div>
          <div><a href="">Support</a></div>
        </div>
        
        <div className='col-md-6 col-sm-12 d-flex justify-content-end gap-5 py-3 bottonHeader'>
          <div class="dropdown">
            <button class="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              English
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item border-bottom p-2" href="#">English</a></li>
              <li><a class="dropdown-item p-2" href="#">Nepali</a></li>
            </ul>
          </div>
          <div class="dropdown">
            <button class="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              USD
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item border-bottom p-2" href="#">USD</a></li>
              <li><a class="dropdown-item p-2" href="#">NPR</a></li>
            </ul>
          </div>
          </div>

      </div>
    </header>
  )
}

export default Top
