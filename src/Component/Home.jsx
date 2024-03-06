import React from 'react'
import { TbSquareRoundedArrowRightFilled } from "react-icons/tb";

import img from '../assets/creative-light-bulb-abstract-glowing-blue-background-generative-ai_188544-8090.avif'
const Home = () => {
  
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
    
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-7xl text-white font-bold'>
                I'am Full Stack Developer
            </h2>
            <p className=' text-gray-500 py-4 max-w-md'>
                Profile mon niveau mes competence
                5 years white mastre in Software option Maige 
                blala best wait to wrhite your savoir faire et savoire etre 
                to get your dreams and bieng best personne of your self ;.......
                that all Portfolio need:
                Technologie : Reactjs , Tailwind, Nodejs, html,css...
            </p>
            <div>
            <button className='group text-white w-fit px-6 py-3 my-2 flex items-center
            rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                
                belive in your selfGO
                    <span className='group-hover:rotate-90 duration-300'>
                    <TbSquareRoundedArrowRightFilled size={25}
                    className='ml-1'/>
                    </span>
            </button>
            </div>
        </div>
      
      <div>
        <img src={img} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full' />
      </div>
      </div>
    </div>
  )
}

export default Home;
