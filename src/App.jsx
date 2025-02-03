import Navbar from "./Components/Navbar"
import Home from "./Pages/Home/Home"
import {useDispatch, useSelector} from 'react-redux'
import { HideSidebar } from "./Store/Slices/GlobalSlices";
import About from "./Pages/About/About";
import Portfolio from "./Pages/Porfolio/Portfolio";
import Contact from "./Pages/Contact/Contact";
import { Link, Element } from 'react-scroll';


function App() {
 
  const Sidebarstate = useSelector(state=>state.GlobalSlice.SidebarVisable) ;
  
  const dispatch =useDispatch();

  return (
    <main className="relative z-[100]  " >
 
        <section className="bg-[var(--main-color)] px-5  pb-20 z-[10]  ">
          <div>
              <Navbar />
          </div>

            <div className="mt-20 z-[10]" onClick={()=>{
              dispatch(HideSidebar())
            }}>
            <Element name="#home"> <Home /></Element>
            </div>
        </section >

        <Element name="#about"><section onClick={()=>{
              dispatch(HideSidebar())
            }} className="flex z-[-10] relative pt-10  bg-[var(--Seconde-color)]">
            <h1 className="mt-auto mb-10 ml-auto mr-auto newfont text-[45px] ">About Me</h1>
        </section></Element>

      
        <section onClick={()=>{
              dispatch(HideSidebar())
            }} className="pb-10 flex bg-[var(--main-color)] px-5   z-[-20] relative   ">
              
              <div className="mt-20 mb-auto ml-auto mr-auto">
                <About />

              </div>
        </section>


        <Element name="#portfolio"><section onClick={()=>{
              dispatch(HideSidebar())
            }} className="flex z-[-30] relative pt-10  bg-[var(--Seconde-color)]">
            <h1 className="mt-auto mb-10 ml-auto mr-auto newfont text-[45px] ">Protfolio</h1>
        </section></Element>

        <section onClick={()=>{
              dispatch(HideSidebar())
            }} className="pb-10 flex bg-[var(--main-color)] px-5   z-[-40] relative  ">
              
              <div className="mt-20 mb-auto ml-auto mr-auto">
                <Portfolio />

              </div>
        </section>

        <Element name="#contact"><section onClick={()=>{
              dispatch(HideSidebar())
            }} className="flex z-[-50] relative pt-10   bg-[var(--Seconde-color)]">
            <h1 className="mt-auto mb-10 ml-auto mr-auto newfont text-[45px] ">Contact</h1>
        </section></Element>

        <section onClick={()=>{
              dispatch(HideSidebar())
            }} className="pb-10 flex bg-[var(--main-color)] px-5   z-[-80] relative ">
              
              <div className="mt-auto mb-auto w-full ">
                <Contact />

              </div>
        </section>


    </main>
  )
}

export default App
