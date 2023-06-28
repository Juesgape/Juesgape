import React from 'react'
import htmlImage from '../assets/skills/html.png'
import cssImage from '../assets/skills/css.png'
import jsImage from '../assets/skills/javascript.png'
import nextJsImage from '../assets/skills/nextjs.png'
import pythonImage from '../assets/skills/Python.png'
import reactImage from '../assets/skills/react_icon.png'
import githubImage from '../assets/skills/github1.png'
import gitImage from '../assets/skills/Git-Icon-1788C.png'

function Skills() {
    return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#a289c2]'>Skills</p>
            <h2 className='py-4 text-[#ca6aec]'>What I Can Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 gradient-border'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>

                    <img src={htmlImage} alt='' width='64px' height='64px'></img>

                </div>

                <div className='flex flex-col items-center justify-center'>
                    <h3>HTML</h3>
                </div>

            </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 gradient-border'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>

                    <img src={cssImage} alt='' width='64px' height='64px'></img>

                </div>

                <div className='flex flex-col items-center justify-center'>
                    <h3>CSS</h3>
                </div>

            </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 gradient-border'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>

                    <img src={jsImage} alt='' width='64px' height='64px'></img>

                </div>

                <div className='flex flex-col items-center justify-center'>
                    <h3>javascript</h3>
                </div>

            </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 gradient-border'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>

                    <img src={reactImage} alt='' width='64px' height='64px'></img>

                </div>

                <div className='flex flex-col items-center justify-center'>
                    <h3>React</h3>
                </div>

            </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 gradient-border'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>

                    <img src={pythonImage} alt='' width='64px' height='64px'></img>

                </div>

                <div className='flex flex-col items-center justify-center'>
                    <h3>Python</h3>
                </div>

            </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 gradient-border'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto bg-white rounded-full'>

                    <img src={nextJsImage} alt='' width='64px' height='64px'></img>

                </div>

                <div className='flex flex-col items-center justify-center'>
                    <h3>Next.js</h3>
                </div>

            </div>
            </div>


            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 gradient-border'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='bg-white rounded-full m-auto'>

                    <img src={githubImage} alt='' width='64px' height='64px'></img>

                </div>

                <div className='flex flex-col items-center justify-center'>
                    <h3>Github</h3>
                </div>

            </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 gradient-border'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>

                    <img src={gitImage} alt='' width='64px' height='64px'></img>

                </div>

                <div className='flex flex-col items-center justify-center'>
                    <h3>Git</h3>
                </div>

            </div>
            </div>


            </div>
        </div>
    </div>
)
}

export {
    Skills
}