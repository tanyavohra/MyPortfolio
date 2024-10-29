import React from 'react'
import mypic from "/src/assets/mypic.png"
import Mebtn from './Mebtn'


function Hero() {
  return (
    <div>
        <div id="main" className="flex flex-row justify-between" > 
        <div id="mypic" className="" data-aos="fade-right">
          
          <img id="imgp" src={mypic} style={{width:500}} ></img>
  </div> 
        <div id="herotext"className=" bg-green-700 w-24 h-12 text-white pl-10 "style={{fontFamily: "Montserrat"}}  data-aos="fade-up">
       <a href="https://www.linkedin.com/in/tanya-vohra-57a143321/"> <i className="fa-brands fa-linkedin mr-4"></i><span className="mr-2">Linkedin:</span>
       <span> Tanya-Vohra</span></a>
        <br/>
        <br/>
        <i class="fa-regular fa-envelope mr-3"></i>
        <span className="mr-2"> G-mail:</span>
        <span>vohratanya5@gmail.com</span>
        </div>
      </div> 
     
      <Mebtn style={{zIndex:2}}></Mebtn>

      <div className="bg-white w-35 h-12" style={{marginTop:-56,zIndex:1,height:60}}></div>
     
    </div>
  )
}

export default Hero