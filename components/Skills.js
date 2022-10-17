import Image from 'next/image'
import React from 'react'
import htmlImage from '../public/assets/skills/html.png'
import cssImage from '../public/assets/skills/css.png'
import jsImage from '../public/assets/skills/javascript.png'
import nextJsImage from '../public/assets/skills/nextjs.png'
import pythonImage from '../public/assets/skills/Python.png'
import kotlinImage from '../public/assets/skills/Kotlin_Icon.png'
import githubImage from '../public/assets/skills/github1.png'
import gitImage from '../public/assets/skills/Git-Icon-1788C.png'

function Skills() {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#16c60c]'>Skills</p>
            <h2 className='py-4'>What I Can Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>

                    <Image src={htmlImage} alt='' width='64px' height='64px'></Image>

                </div>

                <div className='flex flex-col items-center justify-center'>
                    <h3>HTML</h3>
                </div>

            </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>

                    <Image src={cssImage} alt='' width='64px' height='64px'></Image>

                </div>

                <div className='flex flex-col items-center justify-center'>
                    <h3>CSS</h3>
                </div>

            </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>

                    <Image src={jsImage} alt='' width='64px' height='64px'></Image>

                </div>

                <div className='flex flex-col items-center justify-center'>
                    <h3>javascript</h3>
                </div>

            </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>

                    <Image src={nextJsImage} alt='' width='64px' height='64px'></Image>

                </div>

                <div className='flex flex-col items-center justify-center'>
                    <h3>Next.Js</h3>
                </div>

            </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>

                    <Image src={pythonImage} alt='' width='64px' height='64px'></Image>

                </div>

                <div className='flex flex-col items-center justify-center'>
                    <h3>Python</h3>
                </div>

            </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>

                    <Image src={kotlinImage} alt='' width='64px' height='64px'></Image>

                </div>

                <div className='flex flex-col items-center justify-center'>
                    <h3>Kotlin</h3>
                </div>

            </div>
            </div>


            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>

                    <Image src={githubImage} alt='' width='64px' height='64px'></Image>

                </div>

                <div className='flex flex-col items-center justify-center'>
                    <h3>Github</h3>
                </div>

            </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>

                    <Image src={gitImage} alt='' width='64px' height='64px'></Image>

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

export default Skills