import React from "react";
import { useEffect, useState } from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import logoImage from '../assets/Juesgape.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
  
    const handleNav = () => {
      setNav(!nav)
    }
  
    useEffect(() => {
      const handleShadow = () => {
        if (window.scrollY >= 90) {
          setShadow(true)
        } else {
          setShadow(false)
        }
      }
      window.addEventListener('scroll', handleShadow)
    },[])
  
    return (
      <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100] bg-[#15011ef4]' : 'fixed w-full h-20 z-[100]'}>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <a href='/'>
          <img className='cursor-pointer' src={logoImage} alt='main-logo' width='200' height='50'/>
          </a>
          <div>
            <ul className='text-[#ca6aec] font-bold hidden md:flex'>
                
                  <a href='#main'> <div className='ml-10 text-sm uppercase hover:border-b'>Home</div></a>
                
                  <a href='#about'><div className='ml-10 text-sm uppercase hover:border-b'>About</div></a> 
                
                
                  <a href='#skills'><div className='ml-10 text-sm uppercase hover:border-b'>Skills</div></a>
                
                
                  <a href='#projects'><div className='ml-10 text-sm uppercase hover:border-b'>Projects</div></a>
                
                {/* <a href='/'>
                  <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                </a> */}
            </ul>
            <div onClick={handleNav} className='md:hidden'>
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>

        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70': ''}>
            <div className={
            nav 
            ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45% h-screen bg-[#15011E] p-10 ease-in duration-500'
            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
            }
            >
            <div>
            <div className='flex w-full items-center justify-between'>
            <img className='' src={logoImage} alt='/' width='190' height='50'/>
                <div onClick={handleNav} className='rounded-full shadow-lg  p-3 cursor-pointer circle-border mr-8'>
                    <AiOutlineClose></AiOutlineClose>
                </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
                <p className='w-[85%] md:w-[90%] py-4'>Never stop learning 💚</p>
            </div>
            </div>
        <div>
            <ul className='upper'>
                <a href='/#main'>
                    <li onClick={handleNav}  className='py-4 text-sm'>Home</li>
                </a>
                <a href='/#about'>
                    <li onClick={handleNav} className='py-4 text-sm'>About</li>
                </a>
                <a href='/#skills'>
                    <li onClick={handleNav} className='py-4 text-sm'>Skills</li>
                </a>
                <a href='/#projects'>
                    <li onClick={handleNav} className='py-4 text-sm'>Projects</li>
                </a>

            </ul>
            <div className='pt-40'>
                <p className='uppercase tracking-widest text-[#16c60c]'>Let's connect</p>
            <div className='flex items-center justify-evenly my-4 w-full sm:w-[80%]'>

            <a  href='https://www.linkedin.com/in/juan-esteban-gallego-2aba45247' target='_blank'>
                <div className='rounded-full shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300 circle-border'>
                        <FaLinkedinIn></FaLinkedinIn>
                </div>
            </a>

            <a href='https://github.com/Juesgape' target='_blank'>
                <div className='rounded-full shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300 circle-border'>
                    <FaGithub></FaGithub>
                </div>
            </a>

            <a href='https://twitter.com/Juesgape' target='_blank'>
                <div className='rounded-full shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300 circle-border'>
                    <BsTwitter></BsTwitter>
                </div>
            </a>

            </div>
        </div>
        </div>
    </div>
    </div>
    </div>
    );
};
export {
  Navbar
}