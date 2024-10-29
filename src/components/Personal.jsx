import React from 'react';
import paint from "/src/assets/paint.png";
import sing from '/src/assets/sing.png';
import write from"/src/assets/write.png";

function Personal(){
  return (
    <div>
    <div id="main" className="flex flex-row justify-evenly"> 
      {/* Activites */}
        <div id="activities"className="w-50 h-12" data-aos="fade-right">
        <h1 style={{
        color:"black",
        fontFamily:"fragile",
        // fontWeight: "normal",
        fontSize:"3rem",
        marginTop:"2rem",
        marginBottom:"2rem",
      }}>Activities</h1> 
          {/* txt */}
           <p style={{fontSize:15,fontFamliy:"Montserrat"}}>
            <p style={{fontSize:25,fontWeight:"650",fontFamliy:"Montserrat"}} >Fine Arts and Crafts Club</p>
            <br/>
            <p style={{fontWeight:600}}>Role:</p> Member
            <br/>
            <p style={{fontWeight:600}}>Activities:</p> Regularly participate in decorating campus spaces for events and exhibitions.<br/>
            <p style={{fontWeight:600}}>Skills Developed:</p> Collaboration, creativity, and management<br/><br/>
            
            <p style={{fontSize:25,fontWeight:"650",fontFamliy:"Montserrat"}} >
              Hackathon
            </p>
            <br/>
            <p style={{fontWeight:600}}>[Manipal University Jaipur]</p>
            <br/>
            <p style={{fontWeight:600}}>Role:</p>Member 
            <br/>
            <p style={{fontWeight:600}}>Activities:</p> Made a web based application for Farmers under a time constraint.<br/>
            <p style={{fontWeight:600}}>Skills Developed:</p>Enhanced teamwork and communication skills under tight deadlines.<br/><br/>
            </p>
            

          {/* txtend*/}
        </div> 
        {/* Activities end */}
        {/*  */}
        {/*  */}
        {/* Hobby */}
        <div id="hobby" className="w-50 h-12" data-aos="fade-right">
          {/*a) lang */}
    <div>    
      <h1 style={{
        color:"black",
        fontFamily:"fragile",
        // fontWeight: "normal",
        fontSize:"3rem",
        marginBottom:"2rem",
      }}>Languages
      <br/>
      <i class="fa-solid fa-language"></i>
      </h1>
         {/* txt */}
       <p id="lang">
      <p style={{fontSize:25,fontWeight:"650"}}>English </p>
      <br/>
      Proficient in English, with strong communication skills.
      <br/>
      <br/>
      <p style={{fontSize:25,fontWeight:"650"}}>Hindi</p>
      <br/>
      Fluent in Hindi, allowing for effective engagement with Hindi-speaking audiences.
       </p>
         {/* txtend*/}
      </div>
      {/* a)langend */}
      {/* b)hob */}
    <div id="hobbies">    
      <h1 style={{
        color:"black",
        fontFamily:"fragile",
        // fontWeight: "normal",
        fontSize:"3rem",
        marginTop:"2rem",
        marginBottom:"4rem",
      }}>Hobbies</h1>
         {/* txt */}
         <div style={{display:"flex",fontFamily:"Montserrat",fontSize:25,fontWeight:650}} className="mb-12" id="hobimg">

         <div className="hob">
         <img id="paint" src={paint} className="h-24 mr-12"></img>
         <br/>
         <p className="h-24 mr-12 paint">Art</p>
         </div>
         <div  className="hob">
         <img  id="sing" src={sing} className="h-24 mr-12"></img>
         <br/>
         <p className="h-24 mr-12 sing">Singing</p>
         </div>
         <div  className="hob">
         <img id="write" src={write} className="h-24 mr-12"></img>
         <br/>
         <p className="h-24 mr-12 write">Writing</p>
         </div>

         </div>
          {/* txtend*/}
      </div>
       {/* b)hobend */}
        </div>
        {/* Hobby end */}
    </div> 
    </div>
  )
}

export default Personal;