import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Info from './components/Info';
import Acads from './components/Acads';
import Personal from './components/Personal';
import Footer from './components/Footer';

function App() {
  

  return (
    <>

   <div id="main" className=" App flex flex-col" > 
        <div id="one"className="w-30 h-12">
          <Navigation></Navigation>
          </div> 
        <div id="two"className="w-30 h-12">
          <Hero></Hero>
          </div> 
        <div id="three" className="bg-white w-30 h-12">
          <Info></Info>
          </div> 
        <div id="four" className="w-30 h-12">
         <Acads></Acads>
          </div> 
        <div id="five"className="w-30 h-12">
         <Personal></Personal>
          </div> 
          <div id="six" className="bg-black w-30 h-12">
            <Footer></Footer>
          </div>
    </div>
    </>
  )
}

export default App
