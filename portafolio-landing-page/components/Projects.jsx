import Image from 'next/image'
import React from 'react'
import calculatorImg from '../public/assets/projects/calculator - copia.png'
import etchAsketchImg from '../public/assets/projects/etchAsketch - copia.png'
import gamesWithJsImg from '../public/assets/projects/gamesWithjs.jpeg'
import quizSoccerAppImg from '../public/assets/projects/quiz-soccer-app - copia.jpg'


export const Projects = () => {
  return (
    <div className='w-full '>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
        <h2 className='py-4'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-10'>

        <a href='https://juesgape.github.io/Calculator/' target='_blank'>
            <div className='cursor-pointer flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from[#5651e5] to-[#709dff]'>

            <Image className='rounded-xl group-hover:opacity-10' src={calculatorImg} alt='/'></Image>
            <div className='hidden group-hover:block absolute '>
                <h3 className=' text-2xl tracking-wider text-[#5651e5]'>Calculator</h3>
            </div>
            </div>
        </a>

        <a href='https://juesgape.github.io/Etch-A-Sketch/' target='_blank'>
            <div className='cursor-pointer relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from[#5651e5] to-[#709dff]'>

            <Image className='rounded-xl group-hover:opacity-10' src={etchAsketchImg} alt='/' height='1065px'></Image>
            <div className='hidden group-hover:block absolute '>
                <h3 className=' text-2xl tracking-wider text-[#5651e5]'>Etch A Sketch</h3>
            </div>
            </div>
        </a>

        <a href='https://juesgape.github.io/Basic-games-/' target='_blank'>
            <div className='cursor-pointer relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from[#5651e5] to-[#709dff]'>

            <Image className='rounded-xl group-hover:opacity-10' src={gamesWithJsImg} alt='/' height='1065px'></Image>
            <div className='hidden group-hover:block absolute '>
                <h3 className=' text-2xl tracking-wider text-[#5651e5]'>Games With Js</h3>
            </div>
            </div>
        </a>

        <a href='https://github.com/Juesgape/Quiz-app-soccer-players' target='_blank'>
            <div className='cursor-pointer relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from[#5651e5] to-[#709dff]'>

            <Image className='rounded-xl group-hover:opacity-10' src={quizSoccerAppImg} alt='/' height='1065px'></Image>
            <div className='hidden group-hover:block absolute '>
                <h3 className=' text-2xl tracking-wider text-[#5651e5]'>Quiz Soccer App</h3>
            </div>
            </div>
        </a>

        

        </div>

        </div>
    </div>
  )
}
