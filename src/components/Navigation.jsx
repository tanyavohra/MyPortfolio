import React from 'react'

function Navigation(){
  return (
    <nav className="text-white px-8 md:px-16 lg:px-24" style={{backgroundColor:"#334b35",width:"100%"}}>
      <div className="container py-2 flex justify-center md:justify-between items-center" data-aos="fade-down">
        <div id="logo"className="text-2xl font-bold hidden md:inline">Tanya Vohra</div>
        <div className="space-x-6"> 
          <a id="aboutme"href="#txthead" className="hover:text-gray-400">About Me</a>
          <a id="project"href="#exp" className="hover:text-gray-400">Project</a>  
       <a href="#pic">   <button id="contact" className="bg-gradient-to-r from-red-400 to-yellow-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">Contact Me</button></a>
        </div>
       
      </div>
    </nav>
  )
}

export default Navigation;