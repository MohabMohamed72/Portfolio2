import React from 'react'
import ProfileImg from '../../assets/imgs/5771431998890559197.jpg'
import { IoMdDownload } from "react-icons/io";

const Home = () => {

  return (
    <div className='z-[100]'>

      <div className='mt-auto mb-auto '>
        <div className='rounded-full size-[150px] overflow-hidden ml-auto mr-auto border-4 border-white '>
          <img src={ProfileImg} alt="Profile Image" />
        </div>

        <p className='mt-3 px-5 w-fit ml-auto mr-auto text-justify text-[#000000aa] md:w-[500px] newfontReg max-md:max-w-[400px]'>
          As a passionate Front-End Developer, I specialize in creating dynamic and responsive web applications using React.js, HTML, and CSS. With a keen eye for design and a commitment to user experience
        </p>

        <h1 className='w-fit ml-auto mr-auto text-[30px] font-[600] mt-2 newfont text-[#0000008e] pl-2'>
          Frontend Developer
        </h1>

        <div className='ml-auto mr-auto w-fit mt-4'>
          <button className='bg-black rounded-3xl text-white font-[500] p-2 ml-auto mr-auto flex gap-2 items-center  ' onClick={() => { window.open('https://drive.google.com/drive/folders/1AuumtWxwEwJ-p2a47v-GpH3XhF2VU4X9', '_blank') }}>
            Download Cv
            <IoMdDownload className='text-white download-arrow-animation' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home