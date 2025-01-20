import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { HideSidebar, ShowSidebar } from '../Store/Slices/GlobalSlices';
import { Link, Element } from 'react-scroll';
import { IoCloseCircle } from 'react-icons/io5'

const Navbar = () => {

    const [DropDown , setDropDown] = useState(false)

    const Sidebarstate = useSelector(state=>state.GlobalSlice.SidebarVisable) ;
  
    const dispatch =useDispatch();
  

  return (
    <nav className="border-gray-200">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative">

        {/* Logo  */}

        <Link to="#home" duration={500} smooth={true}><a  className="flex cursor-pointer items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Portfolio</span>
        </a></Link>

        {/* Side Bar Button */}
        <button onClick={()=>{
            dispatch(ShowSidebar())
        }} data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        {
            (Sidebarstate)? <ul className='flex flex-col gap-1 absolute top-0 md:hidden right-[-20px] w-1/2 bg-[var(--Seconde-color)] h-lvh'>
                <IoCloseCircle onClick={()=>{dispatch(HideSidebar())}}/>
                <Link to="#home" duration={500} smooth={true}  className='sidebar-list cursor-pointer' onClick={()=>{dispatch(HideSidebar())}}><li>
                    home
                </li></Link>
                <Link to="#about" duration={500} smooth={true} className='sidebar-list cursor-pointer' onClick={()=>{dispatch(HideSidebar())}}><li >
                    About
                </li></Link>
                <Link to="#portfolio" duration={500} smooth={true} className='sidebar-list cursor-pointer' onClick={()=>{dispatch(HideSidebar())}}><li >
                    Portfolio
                </li></Link>
                <Link to="#contact" duration={500} smooth={true} className='sidebar-list cursor-pointer' onClick={()=>{dispatch(HideSidebar())}}><li >
                    Contact
                </li></Link>
            </ul>:null 
        }

        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">

            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            
                {/* Home Button  */}
                <li>
                    <Link to="#home" duration={500} smooth={true} className="cursor-pointer block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[var(--hover-text-color)] md:p-0 global-transition">Home</Link>
                </li>

                {/* About Button with dropdown  */}
                <li className='relative'>
                    <button  className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[var(--hover-text-color)] global-transition  md:p-0 md:w-auto " 
                    onClick={()=>{
                        setDropDown(!DropDown)
                    }} 
                    >About 
                        <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                        </svg>
                    </button>
                    {
                        (DropDown)? <ul className='flex gap-3 flex-col absolute top-full left-[-20px] mt-1 bg-[var(--Seconde-color)] global-transition rounded-md'>
                            <Link to="#eduction" duration={500} smooth={true} onClick={()=>{setDropDown(false)}} className='cursor-pointer p-3 px-6 hover:bg-white'><li>
                                Eduction
                            </li></Link>
                            
                            <Link to="#experince" duration={500} smooth={true} onClick={()=>{setDropDown(false)}} className='cursor-pointer p-3  px-6 hover:bg-white'> <li>
                                Experience
                            </li></Link>
                           
                            <Link to="#skills" duration={500} smooth={true} onClick={()=>{setDropDown(false)}} className='cursor-pointer p-3  px-6 hover:bg-white'><li>
                                Skills
                            </li></Link>
                        </ul>:null
                    }
                </li>
                
                {/* Portfilio Button  */}
                <li>
                    <Link to="#portfolio" duration={500} smooth={true} className="cursor-pointer block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[var(--hover-text-color)] global-transition md:p-0">Portfolio</Link>
                </li>

                {/* Contact Button  */}
                <li>

                    <Link  to="#contact" duration={500} smooth={true} className="cursor-pointer block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[var(--hover-text-color)] global-transition md:p-0">Contact</Link>
                </li>
            </ul>
        </div>
    </div>
    </nav>



  )
}

export default Navbar