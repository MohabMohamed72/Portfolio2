import React, { useState } from 'react'
import Filmpire from '../../assets/imgs/Filmpire.png'
import Ecommerce from '../../assets/imgs/Ecommerce.png'
import Am from '../../assets/imgs/Am.png'
import Kasper from '../../assets/imgs/kasper.png'
import Dashboard from '../../assets/imgs/Dashboard.png'
import Vue from '../../assets/imgs/ecom.png'
import ORBIT from '../../assets/imgs/ORBIT.png'
import SAAS from '../../assets/imgs/SAAS.png'
import LocationStudio from '../../assets/imgs/LocationStudio.png'
import HSE from '../../assets/imgs/HSE.png'

const Portfolio = () => {
    const [filmpire ,setfilmpire] = useState(false)
    const [ecommerce ,setecommerce] = useState(false)
    const [am ,setam] = useState(false)
    const [kasper ,setkasper] = useState(false)
    const [dashboard ,setdashboard] = useState(false)
    const [vue ,setvue] = useState(false)
    const [Orbit ,setOrbit] = useState(false)
    const [locationStudio ,setLocation] = useState(false)
    const [Saas ,setSaas] = useState(false)
    const [Hse ,setHse] = useState(false)

  return (
    <div  className='flex gap-5 flex-wrap  mt-20 justify-center pb-20'>
        <div className='portfolio-div' 
            onMouseEnter={()=>{
                setfilmpire(true)
             
            }}
            onMouseLeave={()=>{
                setfilmpire(false)
            
            }}
            onClick={()=>{
                window.open('https://filmpiren.netlify.app/' , '_blank')}}
            >
            <img src={Filmpire} alt="" className='portfolio-img' />
            <div className={`${filmpire? ' bottom-0 h-full':'h-0 hidden'} portfolio-text-div`} >
                <h1 className='text-[15px] font-[500] newfont'>Filmpire</h1>
                <p className='text-[11px] newfontReg'>A comprehensive web application that provides an extensive collection of movies, complete with detailed information about each film using React js , Tailwind , Redux Toolkit</p>
            </div>
        </div>
        <div className='portfolio-div'  onMouseEnter={()=>{
                setecommerce(true)
            }}
            onMouseLeave={()=>{
                setecommerce(false)
            }}
            onClick={()=>{window.open('https://ecommerce8.netlify.app/' , '_blank')}}>
            <img src={Ecommerce} alt=""  className='portfolio-img'/>
            <div className={`${ecommerce? 'bottom-0 h-full':'h-0 hidden'} portfolio-text-div`}
           >
                <h1 className='text-[15px] font-[500] newfont'>ForEver</h1>
                <p className='text-[11px] newfontReg'> online clothing store, where style meets comfort! Explore our curated collection of trendy apparel for men, women, and childrens</p>
            </div>
        </div>
        <div className='portfolio-div'  
         onMouseEnter={()=>{
            setam(true)
            }}
            onMouseLeave={()=>{
                setam(false)
            }}
            onClick={()=>{window.open('https://ampage.netlify.app/' , '_blank')}}>
            <img src={Am} alt="" className='portfolio-img' />
            <div className={`${am? 'bottom-0 h-full':'h-0 hidden'} portfolio-text-div`}
           >
                <h1 className='text-[15px] font-[500] newfont'>Am Robotics</h1>
                <p  className='text-[11px] newfontReg'>First page using html and css</p>
            </div>
        </div>
        <div className='portfolio-div'
         onMouseEnter={()=>{
            setkasper(true)
            }}
            onMouseLeave={()=>{
                setkasper(false)
            }}
            onClick={()=>{window.open(' https://kasperpage.netlify.app/' , '_blank')}}>
            <img src={Kasper} alt=""  className='portfolio-img'/>
            <div className={`${kasper? ' bottom-0 h-full':'h-0 hidden'} portfolio-text-div`}>
                <h1  className='text-[15px] font-[500] newfont'>Kasper</h1>
                <p  className='text-[11px] newfontReg'>Page Using html and Tailwind And Javascript</p>
            </div>
        </div>
        <div className='portfolio-div'
         onMouseEnter={()=>{
            setdashboard(true)
            }}
            onMouseLeave={()=>{
                setdashboard(false)
            }}
            onClick={()=>{window.open(' https://dasborad.netlify.app/' , '_blank')}}>
            <img src={Dashboard} alt="" className='portfolio-img' />
            <div className={`${dashboard? 'bottom-0 h-full ':'h-0 hidden'} portfolio-text-div`}>
                <h1 className='text-[15px] font-[500] newfont'>Dashboard</h1>
                <p className='text-[11px] newfontReg'>Dashboard Page Using Html And Tailwind Only</p>
            </div>
        </div>

        <div className='portfolio-div'
         onMouseEnter={()=>{
            setvue(true)
            }}
            onMouseLeave={()=>{
                setvue(false)
            }}
            onClick={()=>{window.open('https://ecommerce759.netlify.app/' , '_blank')}}>
            <img src={Vue} alt="" className='portfolio-img' />
            <div className={`${vue? 'bottom-0 h-full ':'h-0 hidden'} portfolio-text-div`}>
                <h1 className='text-[15px] font-[500] newfont'>Ecommerce Vue</h1>
                <p className='text-[11px] newfontReg'>Ecommerce Vue js Website</p>
            </div>
        </div>
        <div className='portfolio-div'
         onMouseEnter={()=>{
            setOrbit(true)
            }}
            onMouseLeave={()=>{
                setOrbit(false)
            }}
            onClick={()=>{window.open('https://orbitconsults.com/' , '_blank')}}>
            <img src={ORBIT} alt="" className='portfolio-img' />
            <div className={`${Orbit? 'bottom-0 h-full ':'h-0 hidden'} portfolio-text-div`}>
                <h1 className='text-[15px] font-[500] newfont'>Orbit System</h1>
                <p className='text-[11px] newfontReg'>Website And Dashboard Sytem </p>
            </div>
        </div>
        <div className='portfolio-div'
         onMouseEnter={()=>{
            setSaas(true)
            }}
            onMouseLeave={()=>{
                setSaas(false)
            }}
            onClick={()=>{window.open('https://website.saas.techlabeg.com/' , '_blank')}}>
            <img src={SAAS} alt="" className='portfolio-img' />
            <div className={`${Saas? 'bottom-0 h-full ':'h-0 hidden'} portfolio-text-div`}>
                <h1 className='text-[15px] font-[500] newfont'>Education Website</h1>
                <p className='text-[11px] newfontReg'>Education Website And Dashboard sytem for courses  </p>
            </div>
        </div>
        <div className='portfolio-div'
         onMouseEnter={()=>{
            setLocation(true)
            }}
            onMouseLeave={()=>{
                setLocation(false)
            }}
            onClick={()=>{window.open('https://locationstudio.net/en' , '_blank')}}>
            <img src={LocationStudio} alt="" className='portfolio-img' />
            <div className={`${locationStudio? 'bottom-0 h-full ':'h-0 hidden'} portfolio-text-div`}>
                <h1 className='text-[15px] font-[500] newfont'>Location Studio Website</h1>
                <p className='text-[11px] newfontReg'>Location Website And Dashboard sytem Locations  </p>
            </div>
        </div>
        <div className='portfolio-div'
         onMouseEnter={()=>{
            setHse(true)
            }}
            onMouseLeave={()=>{
                setHse(false)
            }}
            onClick={()=>{window.open('https://hse.techlabeg.com/' , '_blank')}}>
            <img src={HSE} alt="" className='portfolio-img' />
            <div className={`${Hse? 'bottom-0 h-full ':'h-0 hidden'} portfolio-text-div`}>
                <h1 className='text-[15px] font-[500] newfont'>Petrol Website</h1>
                <p className='text-[11px] newfontReg'>Petrol Website And Dashboard sytem Petrol  </p>
            </div>
        </div>

    </div>
  )
}

export default Portfolio