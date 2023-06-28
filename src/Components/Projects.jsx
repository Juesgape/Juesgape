import React from 'react'
import triki from '../assets/projects/triki.png'
import shopify from '../assets/projects/shopify.png'
import todoApp from '../assets/projects/TodoApp.png'
import quizGame from '../assets/projects/quiz-game.png'


const Projects = () => {
    return (
    <div id='projects' className='w-full '>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#a289c2]'>Projects</p>
        <h2 className='py-4 text-[#ca6aec]'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-10'>

        <a href='https://shopify-juesgape.vercel.app/' target='_blank'>
            <div className='cursor-pointer flex items-center justify-center h-[500px] max-w-[600px] shadow-x rounded-xl p-4 group hover:bg-gradient-to-r from[#16c60c] to-[#709dff] border border-white'> 
                <figure className='h-[500px] w-full'>
                    <img className='w-full h-full object-contain rounded-xl group-hover:opacity-10' src={shopify} alt='/' />
                </figure>
                <div className='hidden group-hover:block absolute'>
                    <h3 className='text-2xl tracking-wider text-[#16c60c]'>Shopify</h3>
                </div>
            </div>
        </a>

        <a href='https://juesgape.github.io/Todo-app/' target='_blank'>
            <div className='cursor-pointer flex items-center justify-center h-[500px] max-w-[600px] shadow-x rounded-xl p-4 group hover:bg-gradient-to-r from[#16c60c] to-[#709dff] border border-white'> 
                <figure className='h-[500px] w-full'>
                    <img className='w-full h-full object-contain rounded-xl group-hover:opacity-10' src={todoApp} alt='/' />
                </figure>
                <div className='hidden group-hover:block absolute'>
                    <h3 className='text-2xl tracking-wider text-[#16c60c]'>Todo App</h3>
                </div>
            </div>
        </a>

        <a href='https://juesgape.github.io/Quiz-game/' target='_blank'>
            <div className='cursor-pointer flex items-center justify-center h-[500px] max-w-[600px] shadow-x rounded-xl p-4 group hover:bg-gradient-to-r from[#16c60c] to-[#709dff] border border-white'> 
                <figure className='h-[500px] w-full'>
                    <img className='w-full h-full object-contain rounded-xl group-hover:opacity-10' src={quizGame} alt='/' />
                </figure>
                <div className='hidden group-hover:block absolute'>
                    <h3 className='text-2xl tracking-wider text-[#16c60c]'>Quiz Game</h3>
                </div>
            </div>
        </a>

        <a href='https://juesgape.github.io/4Triki-Original/' target='_blank'>
            <div className='cursor-pointer flex items-center justify-center h-[auto] max-w-[600px] shadow-x rounded-xl p-4 group hover:bg-gradient-to-r from[#16c60c] to-[#709dff] border border-white'> 
                <figure className='h-[auto] w-full'>
                    <img className='w-full h-full object-fill rounded-xl group-hover:opacity-10' src={triki} alt='/' />
                </figure>
                <div className='hidden group-hover:block absolute'>
                    <h3 className='text-2xl tracking-wider text-[#16c60c]'>Calculator</h3>
                </div>
            </div>
        </a>

        

        </div>

        </div>
    </div>
)
}

export {
    Projects
}