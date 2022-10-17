import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill, BsTwitter } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>Never stop learning 💚</p>
                <h1 className='py-4 text-gray-700'>Hi, I'm <span className='text-[#5651e5]'>Juan Esteban</span></h1>
                <h1 className='py-2 text-gray-700'>
                   A Front-End Web Developer
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>I'm a junior front-end developer, currently studying software engineering at the university of Medellin and web development on Platzi.</p>
                
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>

                    <a  href='https://www.linkedin.com/in/juan-esteban-gallego-2aba45247' target='_blank'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaLinkedin></FaLinkedin>
                        </div>
                    </a>

                    <a href='https://github.com/Juesgape' target='_blank'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub></FaGithub>
                        </div>
                    </a>

                    <a href='https://twitter.com/Juesgape' target='_blank'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsTwitter></BsTwitter>
                        </div>
                    </a>

                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail></AiOutlineMail>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Main