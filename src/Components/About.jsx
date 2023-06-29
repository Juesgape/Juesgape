import React from "react";
import me from '../assets/me.png'
import '../styles/global.css'

const About = () => {
    return(
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-20'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase mt-8 text-xl tracking-widest text-[#a289c2]'>About</p>
                <h2 className='py-4 text-[#ca6aec]'>Who I Am</h2>
                <p className='py-2 px-2 text-[white]'>
                    
                    I'm Juan Esteban, a programming enthusiast with a real passion for web development. I've been diving deep into this exciting field for the past two years as a student at <a className='underline' href='https://platzi.com/' target='_blank'>Platzi</a>. During that time, I've been super hands-on, taking various courses and putting my skills to the test by working on some awesome <a className="underline" href="#projects">projects</a>.

                    I've had a blast getting to know all kinds of tools and technologies along the way. React, JavaScript, Python, Tailwind, TypeScript—you name it! These are just some of the tools in my developer's toolbox that have helped me create great web applications.
                
                </p>

                <p className='py-2 px-2 text-[white]'>
                When I'm not knee-deep in coding, you'll find me exploring other interests. I've got a knack for languages, and I can speak English, Spanish, and Portuguese at a very good level. Being able to communicate effectively with different teams and users from around the world is something I truly value.

                Oh, and math? I can't get enough of it! There's something about solving problems that gets me fired up. The logical thinking and problem-solving skills I've developed through my love for math really come in handy when it comes to web development.

                I'm all about continuous learning and pushing myself to achieve top-notch performance. If there's something I don't know yet, you can bet I'll be diving headfirst into learning it.

                I'm stoked to connect with like-minded professionals who are as passionate about growth and innovation as I am. Together, we can create some truly mind-blowing web experiences that make a lasting impact.

                </p>
            <a href='/#projects'><p className='py-2 px-2 text-[white] underline cursor-pointer'>See some of my projects</p></a>
            </div>
            <div className='w-full h-auto  shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl group-hover:opacity-10' src={me} alt='/'></img>
            </div>
        </div>
    </div>
    )
}

export {
    About
}