import React from 'react'
import './Homepage.css'
import s1 from '../../images/s1.png';
import s2 from '../../images/s2.png';
import s3 from '../../images/s3.png';
import s4 from '../../images/s4.png';
import s5 from '../../images/s5.png';
import s6 from '../../images/s6.png';
import s7 from '../../images/s7.png';
import coverapple from '../../images/coverapple.jpg';
import applelogo from '../../images/applelogo.png'
import samsunglogo from '../../images/samsunglogo.png'
import onepluslogo from '../../images/onepluslogo.png'
import oppologo from '../../images/oppologo.png'
import boatlogo from '../../images/boatlogo.png'
import sonylogo from '../../images/sonylogo.png'



function Homepage() {
  return (


    <div className='homepage_main_div '>


      <div id="carouselExampleFade" class="carousel slide carousel-fade  carousal_main_div">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={coverapple} class="d-block image_size " alt="..." />
          </div>
          <div class="carousel-item">
            <img src={s2} class="d-block image_size" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={s3} class="d-block image_size " alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>


      <div className=' image_carousal'>
        <div>
          <img className='imag_class ' src={s1}></img>
          <h1>Iphone</h1>
        </div>
        <div>
          <img className='imag_class' src={s2}></img>
          <h1>Tablet</h1>
        </div>
        <div>
          <img className='imag_class' src={s3}></img>
          <h1>Laptops</h1>
        </div>
        <div>
          <img className='imag_class' src={s4}></img>
          <h1>Home Appliances</h1>
        </div>
        <div>
          <img className='imag_class' src={s5}></img>
          <h1>Kitchen Appliances</h1>
        </div>
        <div>
          <img className='imag_class' src={s6}></img>
          <h1>Electronic Accessories</h1>
        </div>
        <div>
          <img className='imag_class' src={s7}></img>
          <h1>Speakers and Hometheaters</h1>
        </div>

      </div>
      
      <div className=' image_carousal2'>
                    <div>
                        <img className='imag_class ' src={applelogo}></img>

                    </div>
                    <div>
                        <img className='imag_class ' src={samsunglogo}></img>
                    </div>
                    <div>
                        <img className='imag_class ' src={onepluslogo}></img>
                    </div>
                    <div>
                        <img className='imag_class ' src={oppologo}></img>
                    </div>
                    <div>
                        <img className='imag_class ' src={boatlogo}></img>
                    </div>
                    <div>
                        <img className='imag_class ' src={sonylogo}></img>
                    </div>
                    


                </div>
      

    </div>
    
  )
}

export default Homepage