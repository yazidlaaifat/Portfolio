import React,{useState} from 'react'
import { FiAlignJustify,FiX } from "react-icons/fi"
const NavBare = () => {
    const [nav,setNav] = useState(false);
    const links =[
        {
            id: 1,
            link:'home'
        },
        {
            id: 2,
            link:'about'
        },
        {
            id: 3,
            link:'portfolio'
        },
        {
            id: 4,
            link:'experience'
        },
        {
            id: 5,
            link:'contact'
        },
    ]
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
        <div>
            <h1 className='text-5xl font-signature ml-2'>hello</h1>
        </div>
        <ul className='hidden md:flex'>
            {links.map(({link,id}) =>
            <li key={id} className='px-4 cursor-pointer capitalize text-gray-500 font-medium hover:scale-105 duration-200'>{link}</li>
                )}


        </ul>
        <div onClick={() => setNav(!nav)} className='cursor-pointer hover:scale-105 pr-3 z-10 text-gray-500 md:hidden'>
            {nav ? <FiX size={30}/> :<FiAlignJustify size={30}/>  }
        </div>
        {nav && 
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
        {links.map(({link,id}) =>
            <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>{link}</li>
                )}
           
        </ul>
        }

    </div>
  )
}

export default NavBare