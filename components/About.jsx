import React from 'react'
import Image from 'next/image'
import codingImage from '../public/assets/projects/codingImage.jpg'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#16c60c]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 px-2 text-gray-600'>I build web applications using HTML, CSS, Javascript, and I'm currently learning frameworks. I’m passionate about programming and learning new technologies, that's why I'm studying software engineering at the University of Medellin. Not only that but I also study web development on Platzi 💚. Though I am most proficient in building front-end applications using HTML, CSS and Javascript, I am a quick learner and can pick up new tech stacks as quicly as possible.</p>
                <p className='py-2 px-2 text-gray-600'>
                I started web development in 2021 and I've been a freelancer since then. Although I haven't worked for an actual company, I have taken my studies seriosly and I've built a bunch of projects using different technologies as Next.js, Kotlin, Mit App Inventor and Python. Thanks to <a className='underline' href='https://platzi.com/' target='_blank'>Platzi</a>, I have many web developement certifications. In my free time I study on Platzi, learn languages, and watch series.
                </p>
               <a href='/#projects'><p className='py-2 px-2 text-gray-600 underline cursor-pointer'>See some of my projects</p></a>
            </div>
            <div className='w-full h-auto  shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
              <Image className='rounded-xl group-hover:opacity-10' src={codingImage} alt='/'></Image>
            </div>
        </div>
    </div>
  )
}

export default About