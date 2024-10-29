import React from 'react';
import ppic from "/src/assets/ppic.png";
import {useTypewriter,Cursor} from "react-simple-typewriter";
function Info() {
  const [text]= useTypewriter({
    words:["Tanya !","a Developer .","a Designer .","an Artist ."],
    loop:{},
  });
  return (
    <div>
<div id="main" className="flex flex-row justify-evenly"> 

    <div id="txtbox" className="w-50 h-12">
          <p id="txthead">
            Hello,
            <br/>
            I'm {text}
            <Cursor/>
          </p>
          <p id="infotxt">
           I am a Frontend-Developer and a self-taught designer.I am inquisitive,creative and have keen eye for making a website look appealing.I am currently pursuing my Batchelors in Computer Science Engineering from Swami Keshwanand Institute in Jaipur.
          </p> 
          <a href="https://www.linkedin.com/in/tanya-vohra-57a143321/">
          <button id="link" className="bg-gradient-to-r from-red-400 to-yellow-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          data-aos="fade-up"
          >
          <i className="fa-solid fa-magnifying-glass mr-4"></i>
          https://www.linkedin.com/in/tanya-vohra-57a143321/
          </button>
          </a>
    </div> 
        
    <div id="imgarea" className="">
           

       
       <div id="btns" className="" data-aos="fade-right" data-aos-delay="500">
       <button id="bday"  className="bg-gradient-to-r from-red-400 to-yellow-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
             6 Oct 2005
          </button>
       
          <button id="location" className="bg-gradient-to-r from-red-400 to-yellow-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
           Jagatpura,Jaipur,Rajasthan
          </button>
       
       </div>



          <div id="imgbox">
        
           <img id="pic" src={ppic} style={{width:450}}></img>
          
            <div id="blackbox" className='bg-black w-100'style={{height:200}}>

               <h1 id="hed">Contact</h1>
          
                 <div id="body">
                 <i className="fa-regular fa-envelope mr-4 icon"></i><span>vohratanya5@gmail.com</span>
                 <br/>
                 <i className="fa-solid fa-phone mr-4 icon"></i><span>7878707864</span>
                 </div>

            </div>

          </div>    
   </div> 


</div>
   </div>
  )
}

export default Info;