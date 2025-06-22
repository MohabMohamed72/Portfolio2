import React, { useState } from 'react'
import Filmpire from '../../assets/imgs/Filmpire.png'
import Ecommerce from '../../assets/imgs/Ecommerce.png'
import Am from '../../assets/imgs/Am.png'
import Kasper from '../../assets/imgs/kasper.png'
import Dashboard from '../../assets/imgs/Dashboard.png'
import Vue from '../../assets/imgs/ecom.png'

const Portfolio = () => {
    const [filmpire ,setfilmpire] = useState(false)
    const [ecommerce ,setecommerce] = useState(false)
    const [am ,setam] = useState(false)
    const [kasper ,setkasper] = useState(false)
    const [dashboard ,setdashboard] = useState(false)
    const [vue ,setvue] = useState(false)

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

    </div>
  )
}

export default Portfolio