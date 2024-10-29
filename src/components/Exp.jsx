import React from 'react';
import sahaay from "/src/assets/sahaay.jpg";
import durga from "/src/assets/durga.png";
import lms from "/src/assets/lms.png";
function Exp() {
  return (
    <div>
      {/* main */}
      <div id="exp" className="w-30 h-12"style={{backgroundColor:"#fdaf1c"}} data-aos="fade-right">
       <h1 style={{
        color:"black",
        fontFamily:"fragile",
        // fontWeight: "normal",
        fontSize:"3rem",
        marginTop:"2rem",
        marginLeft:"4rem",
        marginBottom:"2rem",
      }}>Experience</h1>
      {/* projects */}
      <div id="main" className="flex flex-row justify-evenly"> 
        <div className="bg-black" style={{height:"fit-content",width:"30%"}} data-aos="fade-right">
        <div className="max-w-sm rounded overflow-hidden shadow-lg  proj"  style={{height:410}}>
  <img className="w-full" src={lms} alt="Learning Management System"/>
  <div className="px-6 pt-2 pb-3">
    <div className="font-bold text-l mb-2 text-white">LMS</div>
    <p className="text-white text-base text-sm">
      Worked as a Front-end Developer and designed the UI for a web based Learning Management System for students.
    </p>
  </div>
 <a href="https://github.com/tanyavohra/LMS.git">
 <div className="px-4">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2 git">View on Github</span>
  </div>
 </a>
</div>
        </div> 
        <div className="bg-black" style={{height:"fit-content",width:"30%"}} data-aos="fade-right">
        <div class="max-w-sm rounded overflow-hidden shadow-lg  proj"  style={{height:410}}>
  <img className="w-full" src={durga} alt="Women's Safety"/>
  <div className="px-6 pt-2 pb-3">
    <div className="font-bold text-l mb-2 text-white">Durga</div>
    <p className="text-white text-base text-sm">
    I worked as a Front-end Developer for a women’s safety website, while also designing its visual layout to create a user-friendly experience.
    </p>
  </div>
  <a href="https://github.com/tanyavohra/Durga.git">
  <div className="px-4">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2 git">View on Github</span>
  </div>
  </a>
</div>
        </div> 
        <div className="bg-black" style={{height:"fit-content",width:"30%"}} data-aos="fade-right">
        <div className="max-w-sm rounded overflow-hidden shadow-lg  proj"  style={{height:410}}>
  <img className="w-full" src={sahaay} alt="Farmer assistance "/>
  <div className="px-6 pt-2 pb-3">
    <div className="font-bold text-l mb-2 text-white">SAHAAY</div>
    <p className="text-white text-base text-sm">
    As a Front-end Developer, I designed a user-friendly interface for a web-based app aimed at helping farmers.
    </p>
  </div>
  {/* <div className="px-4">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2">View on Github</span>
  </div> */}
</div>
        </div> 
       
    </div>
      
      {/* projectsend */}
    </div>
    {/* mainend */}
    </div>
  )
}

export default Exp