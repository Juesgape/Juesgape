import React from "react";
import { AiOutlineMail } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Main = () => {
    return (
        <div id='main' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='text-[2rem]'>🍩</p>
                    <h1 className='py-4 text-[#a289c2]'>Hi, I'm <span className='text-[#ca6aec]'>Juan Esteban</span></h1>
                    <h1 className='py-2 text-[#a289c2]'>
                        Front-End Developer
                    </h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'></p>
                    
                    <div className='flex items-center justify-evenly max-w-[330px] m-auto py-4'>
    
                        <a  href='https://www.linkedin.com/in/juan-esteban-gallego-2aba45247' target='_blank'>
                            <div className='p-6 cursor-pointer hover:scale-110 ease-in duration-300 circle-border'>
                            <FaLinkedin></FaLinkedin>
                            </div>
                        </a>
    
                        <a href='https://github.com/Juesgape' target='_blank'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 circle-border'>
                            <FaGithub></FaGithub>
                            </div>
                        </a>
    
                        <a href='https://twitter.com/Juesgape' target='_blank'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 circle-border'>
                            <BsTwitter></BsTwitter>
                            </div>
                        </a>
    
                        {/* <a href='mailto:juesgape11@gmail.com' target='_blank'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 circle-border'>
                            <AiOutlineMail></AiOutlineMail>
                            </div>
                        </a> */}
    
                    </div>
                </div>
            </div>
        </div>
    )
}

export {
    Main
}