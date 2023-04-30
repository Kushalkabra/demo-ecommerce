import React from 'react'
import applelogo from '../../images/applelogo.png'
import samsunglogo from '../../images/samsunglogo.png'
import onepluslogo from '../../images/onepluslogo.png'
import oppologo from '../../images/oppologo.png'
import boatlogo from '../../images/boatlogo.png'
import sonylogo from '../../images/sonylogo.png'


import './Brands.css'

function Brands() {
    return (
        
            
            <div>
               
                
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

export default Brands