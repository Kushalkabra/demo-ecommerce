import React from 'react'
import croma from '../../images/croma.png';
import './Header.css'


function Header() {
  return (
    <div>


      <nav class="navbar bg-black navbar-expand-lg " data-bs-theme="dark">
        <div class="container-fluid ">
          <a class="navbar-brand" href="#"></a>
          <a href="/"><img src={croma} width={200} height={200}  /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="nav nav-pills">
           
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/about">AboutUs</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/login">Login/Signup</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/items">Products</a>
              </li>
              
              
             
              
              <li class="nav-item">
                <a class="nav-link" href="#"></a>



              </li>

            </ul>

            <form class="d-flex" role="search">
              <input class="form-control me-20" type="search" placeholder="Search" aria-label="Search" />

            </form>
          </div>
        </div>
      </nav>

    </div>

  )
}






export default Header