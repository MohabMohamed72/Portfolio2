import React from 'react'
import { IoIosCall, IoMdDownload } from 'react-icons/io'
import { MdOutlineMail } from 'react-icons/md'
import { FaLocationDot } from 'react-icons/fa6'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
const Contact = () => {
  return (
    <div  className='flex justify-between items-center mt-10 w-full max-md:flex-col max-md:gap-10'>

        <div className='flex flex-col gap-2'>
            <div className=' flex items-center gap-2 '>
            <IoIosCall className=''/>
            <p className='t'>01007599123</p>
            </div>
            <div className=' flex items-center gap-2 '>
            <MdOutlineMail  className=''/>
            <a href='mailto:mohabmohamedd72@gmail.com' className='t'>mohabmohamedd72@gmail.com</a>
            </div>
            <div className=' flex items-center gap-2 '>
            <FaLocationDot className=''/>
            <p className=''>Address: Mansoura– Dakahlia</p>
            </div>
        </div>

        <div>
            <div className='flex gap-3 max-sm:justify-center xl:pr-20 '>
                    <div className='p-2 border-2 text-black rounded-full border-black hover:bg-[var(--Seconde-color)]   cursor-pointer  duration-700 transition-all ' onClick={()=>{window.open('https://www.facebook.com/profile.php?id=100001211598348' , '_blank')}}>
                        <FaFacebookF   />
                    </div>
                    <div className='p-2 border-2 text-black rounded-full border-black hover:bg-[var(--Seconde-color)]   cursor-pointer  duration-700 transition-all ' onClick={()=>{window.open('https://www.linkedin.com/in/mohab-mohamed-a5121024b/' , '_blank')}}>
                        <FaLinkedin  />
                    </div>
                    <div className='p-2 border-2 text-black rounded-full border-black hover:bg-[var(--Seconde-color)]   cursor-pointer  duration-700 transition-all ' onClick={()=>{window.open('https://github.com/MohabMohamed72' , '_blank')}}>
                        <FaGithub  />
                    </div>
                    <div className='p-2 border-2 text-black rounded-full border-black hover:bg-[var(--Seconde-color)]   cursor-pointer  duration-700 transition-all ' onClick={()=>{window.open('https://www.instagram.com/mohab_mohamed.74/' , '_blank')}}>
                        <FaInstagram  />
                    </div>
            </div> 
        </div>

        <div>
            <div className='flex flex-col gap-5 items-center'>
                    <a className='' href="mailto:mohabmohamedd772@gmail.com"><button className='hover:bg-[var(--Seconde-color)] hover:text-black text-white bg-black p-2 rounded-md max-sm:w-fit global-transition '>Send Email</button></a>
                </div>
        </div>
    </div>
  )
}

export default Contact