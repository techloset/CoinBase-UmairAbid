

import { Link } from 'react-router-dom'
import Logo from '../Image/Logo.svg'
import { CgMenuBoxed, CgClose } from 'react-icons/cg'
import { useState } from 'react'
import React from 'react'
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className=''>
      <div className='flex items-center justify-between w-[90%] xl:max-w-7xl mx-auto  max-md:flex-wrap '>
        <img src={Logo} alt="" className='mt-8 md:mt-10 w-[200px] md:w-[294px] ' />
        <div className='md:hidden block mt-10 mr-2'>
          <CgMenuBoxed className='h-6 w-6 cursor-pointer' onClick={() => setOpen(!open)} />
        </div>

        {/* <CgMenuBoxed className='md:hidden block h-6 w-6 cursor-pointer' onClick={()=>setOpen(!open)} /> */}
        <nav className={` w-full flex items-center justify-left md:justify-end md:w-auto`}>



          {/* <nav className={`${open ? "block" : "hidden"}w-full md:flex md:items-center md:w-auto`}> */}
          <ul className={`text-base text-gray-600 flex-col mt-[20px] ${open ? 'block' : "hidden"} md:flex md:flex-row md:justify-between md:items-center `}>
            <Link to='/' className=' block text-black font-semibold pt-2 mx-3 lg:mx-7'>Home</Link>
            <Link to='/about' className='block text-black font-semibold  mx-3 lg:mx-7 whitespace-nowrap pt-2'>About Us</Link>
            <Link to='/blog' className='block text-black font-semibold  mx-3 lg:mx-7 pt-2'>Blog</Link>
            <Link to='/contact' className='block  text-black font-semibold  mx-3 lg:mx-7 whitespace-nowrap pt-2'>Contact Us</Link>
            <select className=" p-2 text-gray-500 bg-white border xl:ml-[100px] rounded-md mx-2 lg:mx-5 mt-2 shadow-sm outline-none appearance-none focus:border-indigo-600">
              <option>Sell BitCoin</option>
              <option>Gift Card</option>
            </select>
            <button className='px-8 py-2.5 block h-12 mt-5 bg-gradient-to-b from-blue-500 to-purple-500 text-white text-justify rounded-3xl '>Login</button>
          </ul>

        </nav>
      </div>

    </header>
  )
}

export default Navbar















































