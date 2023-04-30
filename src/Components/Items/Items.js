import React from 'react'
import airpodsmax from '../../images/airpodsmax.jpeg'
import applewatch from '../../images/applewatch.jpeg'
import oneplus from '../../images/oneplus.jpeg'
import oppo from '../../images/oppo.jpeg'
import s23 from '../../images/s23.jpeg'
import boatspeakers from'../../images/boatspeaker.jpeg'
import iphone from '../../images/iphone.jpeg'
import ps5 from '../../images/ps5.jpeg'
import lgtv from '../../images/lgtv.jpeg'
import './Items.css'




function Items() {


    const data = [
        {
            img: iphone,
            name: "Iphone 14 Pro Max (Starlight, 128 GB)",
            price: "1299 ",
            disc: ""
        },
        {
            img: s23,
            name: "SAMSUNG Galaxy S23 Ultra 5G (Green, 256 GB)",
            price: "1000",
            
        },
        {
            img: oneplus,
            name: "OnePlus 11R 5G (Galactic Silver, 128 GB)",
            price: "699",
            
        },
        {
            img: oppo,
            name: "OPPO Reno8T 5G (Sunrise Gold, 128 GB) ",
            price: "599",
            
        },
        {
            img: applewatch,
            name: "AppleWatch Series 8 ",
            price: "599",
            
        },
        {
            img: airpodsmax,
            name: "Airpods Pro Max ",
            price: "450",
            
        },
        {
            img: boatspeakers,
            name: "boAt Stone 620 Bluetooth Speaker ",
            price: "80",
            
        },
        {
            img: ps5,
            name: "Sont Playstation Console 1TB",
            price: "399",
            
        },
        {
            img: lgtv,
            name: "LG UM77 109.22 cm (43 inch) 4K Ultra HD LED WebOS TV with Alexa Compatibility (2021 model)",
            price: "500",
            
        },
    ]
    return (
        
        <div className=' Item_tab' >
            
            
            {data.map((item) => (
                <div class="card">
                    <img  src={item.img} width={200} alt="Iphone" />
                    <div className='item_name'>{item.name}</div>
                    <p class="price">${item.price}</p>
                    <p>{item.disc}</p>
                    <p><button type="button" class="btn btn-primary">Add to cart</button></p>
                </div>
        
            ))}

          
            
        </div>
    )
}

export default Items