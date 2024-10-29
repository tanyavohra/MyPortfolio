import React from 'react';
import figma from "/src/assets/figma.png";
import canva from "/src/assets/canva.png";
import html from "/src/assets/html.png";
import act from "/src/assets/react.png";
import Exp from './Exp';
function Acads() {
  return (
<div>
{/* main */}
<div id="main" className="flex flex-row justify-between mb-24 acads"> 

{/* I Education timline */}

      <div id="edu" className="w-50" style={{height:"fit-content"}} data-aos="fade-right">

      <h1 style={{
        color:" white",
        fontFamily:"fragile",
        // fontWeight: "normal",
        fontSize:"3rem",
        marginTop:"4rem",
        marginLeft:"4rem",
        marginBottom:"4rem",
      }}>Education</h1>

        <ol className="relative border-s border-white dark:border-white mb-24 ml-12">                  
    <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full -start-1.5 border border-white dark:border-white dark:bg-white"></div>
        <time className=" font-semibold text-white dark:text-white" style={{fontSize:"20px",fontFamily:"Montserrat"}}>2020-2021</time>
        <p class="mb-4 mt-4 text-base font-normal text-gray-500 dark:text-white" style={{fontSize:15,fontFamily:"Montserrat"}}>10th - 94%<br/><br/>Sophia Girls Senior Secondary School,Kota</p>
      
    </li>
    <li className="mb-10 ms-4">
    <div className="absolute w-3 h-3 bg-gray-200 rounded-full -start-1.5 border border-white dark:border-white dark:bg-white"></div>
        <time className="text-lg font-semibold text-white dark:text-white" style={{fontSize:"20px",fontFamily:"Montserrat"}}>2022-2023</time>
        <p className="mb-4 mt-4 text-base font-normal text-gray-500 dark:text-white"style={{fontSize:15,fontFamily:"Montserrat"}}>12th - 87.6% <br/>
        <br/>
        Awarded a trophy for achieving the highest marks in English in 12th grade.
          <br/>
          <br/>
          Sophia Girls Senior Secondary School,Kota
          
        </p>
    </li>
    <li className="ms-4">
    <div className="absolute w-3 h-3 bg-gray-200 rounded-full -start-1.5 border border-white dark:border-white dark:bg-white"></div>
        <time className="text-lg font-semibold text-white dark:text-white" style={{fontSize:"20px",fontFamily:"Montserrat"}}>2023</time>
        <p className="mb-4 mt-4 text-base font-normal text-gray-500 dark:text-white"style={{fontSize:15,fontFamily:"Montserrat"}}>
          
        Pursuing a Bachelor of Technology (B.Tech) in Computer Science, currently in the II year at Swami Keshwanand Institute of Technology and Gramothan, Jaipur
        </p>
    </li>
</ol>


{/* 1) Experience */}
<Exp></Exp>
{/* 1) Experience End */}
 </div>
{/* I Education End */}
{/*  */}
{/*  */}
{/* II Skill */}
        <div id= "skill" className="w-50"  data-aos="fade-up" data-aos-delay="600">
        <div id="skillset"className="w-30 h-12 pl-20">
        <h1 id="st" style={{
        color:"white",
        fontFamily:"fragile",
        // fontWeight: "normal",
        fontSize:"3rem",
        marginTop:"4rem",
        marginLeft:"6rem",
        marginBottom:"4rem",
      }}>Technical Skills</h1>

{/* 1)Soft */}

<div id="main" className="flex flex-row justify-evenly ml-24 code"> 
        <div className="w-50" style={{height:"fit-content"}}>
        <h2 style={{
        color:"white",
        fontFamily:"fragile",
        fontSize:"1.5rem",
        marginTop:"2rem",
        marginBottom:"2rem",
      }}>Software Skills</h2>
    {/*a)Softimg  */}
<div style={{display:"flex",flexFlow:"wrap"}}>
      <img src={figma} id="figma" className="h-12"></img>
      <img src={canva} id= "canva" className="h-12 ml-12"></img>
</div>
{/* a)softimg end */}

      <li className="mt-4" style={{fontFamily:"Montserrat",color:"white",fontSize:20}}>
        Figma
      </li>
      <li style={{fontFamily:"Montserrat",color:"white",fontSize:20}}>
        Canva
        </li>
</div> 
{/* 1)Soft End */}

{/* 2)Code */}
        <div className="w-50" style={{height:"fit-content"}}>
        <h2 style={{
        color:"white",
        fontFamily:"fragile",
        fontSize:"1.5rem",
        marginTop:"2rem",
        marginBottom:"2rem",
      }}>Coding Skills</h2>



<div style={{fontFamily:"Montserrat",color:"white",fontSize:20}}>
  {/* a)Codeimg */}
<div style={{display:"flex",flexFlow:"wrap"}} className="mt-4">
<img src={html} id="html" className="h-12"></img>
<img src={act} id="react" className="h-12 ml-2"></img>
</div>
  {/*a)Codeimg end  */}
<li className="mt-4">
  HTML  
</li>
<li>
  CSS
</li>
<li>
  JavaScript
</li>
<li>
  React.js
</li>
</div>

</div> 
{/* 2)Code End */}
    </div> 

        </div>
        </div> 
{/*II Skill End  */}


</div> 
{/* mainend */}
</div>
  )
}

export default Acads;