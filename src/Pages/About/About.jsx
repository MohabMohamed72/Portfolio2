import React from 'react'
import { FaUniversity } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { MdCastForEducation } from "react-icons/md";
import { FaMicrochip } from "react-icons/fa";
import { MdOutlineWebAsset } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";
import { FaCss3 } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { CgShapeHalfCircle } from "react-icons/cg";
import { Link, Element } from 'react-scroll';
import { IoLogoVue } from "react-icons/io5";

const About = () => {
  return (
    <div  className='ml-auto mt-auto'>
        
        <h1 className='mt-5 px-5 text-c ml-auto mr-auto text-justify w-fit'>I am always eager to learn and stay updated with the latest trends in front-end development.</h1>
        
        <Element name='#eduction'><div id='eduction' className='relative mt-10'>
            <hr className='bg-black' />
            <p className='bg-white rounded-3xl p-1 px-3 newfontReg text-black w-fit ml-auto mr-auto absolute top-[-20px] left-1/2 -translate-x-1/2 '>Education</p>
        </div></Element>

        <div className='flex flex-col gap-5'>
            <FaUniversity  className='mt-10 ml-auto mr-auto border-2 rounded-full border-black text-[50px] p-2'/>
            <p className='p-5 text-center bg-[var(--Seconde-color)] rounded-md'>Graduated from the Faculty of Engineering of the Mechatronics Department</p>
        </div>


        <div>
                <Element name='#experince'><div id='experince' className='relative mt-20'>
                    <hr className='bg-black' />
                    <p className='bg-white rounded-3xl p-1 px-3 newfontReg text-black w-fit ml-auto mr-auto absolute top-[-20px] left-1/2 -translate-x-1/2 '>Experience</p>
                </div></Element>

                <div className='flex max-sm:flex-col justify-center  gap-6  mt-10'>
                        
                    <div className='flex flex-col gap-3 '>
                        <GiTeacher  className='experience-icon'/>
                        <p className='experience-text'>Worked As Instructor Of Arduino, C Programming, Python, Machine Learning, Computer Vision, AI, Scratch For 1 Year</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <MdOutlineWebAsset  className='experience-icon'/>
                        <p className='experience-text'>Experience In Html, Css, JavaScript, React, TailWind, Git, Redux</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <MdCastForEducation  className='experience-icon'/>
                        <p className='experience-text'>NTI Training 4 Months</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <FaMicrochip  className='experience-icon'/>
                        <p className='experience-text'>Embedded Systems Diploma</p>
                    </div>

                </div>     
        </div>  


        <div>
                 <Element name='#skills'><div id='skills' className='relative mt-20'>
                    <hr className='bg-black' />
                    <p className='bg-white rounded-3xl p-1 px-3 newfontReg text-black w-fit ml-auto mr-auto absolute top-[-20px] left-1/2 -translate-x-1/2 '>Skills</p>
                </div></Element>

                <div className='flex flex-wrap gap-6  mt-10 justify-center'>
                    <div>
                        <FaHtml5  className='icons text-orange-400' />
                        <p className='icon-text'>HTML</p>
                    </div>

                    <div className='flex flex-col items-center'>
                        <FaCss3  className='icons text-blue-700'/>
                        <p className='icon-text'>CSS</p>
                    </div>

                    <div className='flex flex-col items-center'>
                        <IoLogoJavascript className='icons text-yellow-500' />
                        <p className='icon-text'>Javascript</p>
                    </div>

                    <div className='flex flex-col items-center'>
                        <FaReact className='icons text-blue-300'/>
                        <p className='icon-text'>React</p>
                    </div>

                    <div className='flex flex-col items-center'>
                        <FaGithub  className='icons'/>
                        <p className='icon-text'>Github</p>
                    </div>

                    <div className='flex flex-col items-center'>
                        <RiTailwindCssFill className='icons text-blue-500' />
                        <p className='icon-text'>Tailwind</p>
                    </div>

                    <div className='flex flex-col items-center'>
                        <SiRedux className='icons text-purple-500'/>
                        <p className='icon-text'>Redux</p>
                    </div>

                    <div className='flex flex-col items-center'>
                        <FaPython className='icons text-yellow-500'/>
                        <p className='icon-text'>Python</p>
                    </div>

                    <div className='flex flex-col items-center'>
                        <GiTeacher className='icons' />
                        <p className='icon-text'>Teaching</p>
                    </div>

                    <div className='flex flex-col items-center'>
                        <CgShapeHalfCircle className='icons text-blue-800' />
                        <p className='icon-text'>C <br />Programming</p>
                    </div>

                    <div className='flex flex-col items-center'>
                        <GiArtificialIntelligence className='icons' />
                        <p className='icon-text'>Machine<br />Learning</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <IoLogoVue className='icons text-green-600' />
                        <p className='icon-text'>Vue Js</p>
                    </div>

                </div>     
        </div>  


    </div>
  )
}

export default About