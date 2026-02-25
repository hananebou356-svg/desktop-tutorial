import React from 'react'
import image from '../public/image.png'

function Navbar() {
  return (
    <div><div className="allnav">  
    <div>
        <img src={image} alt="" className="img1" />
    </div>
    <div className="a1">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Projects</a>
        <a href="">Contact</a>
    </div>
    <div className="i1">
         <i className='bx bxl-linkedin-square' ></i>
        <i className='bx bxl-facebook'></i>
        <i className='bx bxl-twitter'></i>
       
    </div>
  </div>
  </div>
   

  )
}

export default Navbar