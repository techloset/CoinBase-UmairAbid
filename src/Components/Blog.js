import React from 'react'
import IMG from '../Image/IMG6.webp'
import IMG7 from '../Image/img7.png'
import Date from '../Image/Date.png'
import social from '../Image/social.png'
import img from '../Image/img8.webp'
import paginations from '../Image/paginations.png'
import Discover from './Discover'
import { Link } from 'react-router-dom'
function Blog() {
    return (
        <div>
            <div className='Back h-[970px] md:h-[792px] bg-no-repeat bg-center w-[100%] mt-[5px] md:mt-[50px] md:justify-center flex-col flex md:flex-row    '>
                <div className='  pt-[100px] md:pt-[100px] flex flex-col  mx-[10%] '>
                    <p className='text-[12px] font-normal text-white '>HOME/BLOG</p>
                    <p className=' max-w-[373px] text-[40px] font-bold text-white leading-[50px] md:leading-[60px]'>Stay updated,
                        Never miss a post.</p>
                    <p className='max-w-[410px]   leading-[27px] text-[18px] font-normal text-white'>Get to know the latest stuff about our services
                        via our blog post.</p>
                </div>
                <div className='mt-[5px] md:mt-[50px] md:flex max-md:justify-center max-md:items-center  '>
                    <img src={IMG} alt="" className='w-[450px]  lg:w-[530px] px-[5%] ' />
                </div>
            </div>
            <div className='flex flex-col justify-center items-center mt-[20px]' >
                <img src={IMG7} alt="" />
            </div>
            <div className='border max-w-[1170px] py-[15px] mx-auto  border-pink-300 rounded-bl-[15px] rounded-br-[15px] flex flex-col justify-center items-center '>
                <p className='text-[32px] font-bold leading-[45px]  mt-[15px] sm:mt-[20px] bg-gradient-to-b from-pink-500 to-indigo-700 text-transparent bg-clip-text text-center px-[5px]'>HOW TO SELL YOUR ITUNES GIFTCARD WITH US .</p>
                <img src={Date} alt="" className='mt-[25px] sm:mt-[30px]' />
                <div className='flex justify-center items-center max-w-[870px] px-[5px]'>
                    <p className='  text-[16px] font-normal mt-[30px] sm:mt-[40px] leading-[28px] text-[#333333] px-[5px] text-center'>Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum voluptaria in. Ad mei modus quodsi complectitur, postea verterem persecuti cu est, sea epicuri.</p>
                </div>
                <Link to='/discover' >
                    <button className=' text-white mt-[30px] sm:mt-[40px] bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 rounded-[100px] w-[157px] h-[54px] font-bold text-[14px] text-center'>DISCOVER</button>
                </Link>
            </div>
            <div className='flex flex-col justify-center items-center mt-[20px]' >
                <img src={social} alt="" className='w-[1170px] max-h-[520px] rounded-tl-[15px] rounded-tr-[15px]' />
            </div>
            <div className='border max-w-[1170px] py-[15px] mx-auto  border-pink-300 rounded-bl-[15px] rounded-br-[15px] flex flex-col justify-center items-center '>
                <p className='text-[32px] font-bold leading-[45px]  mt-[15px] sm:mt-[20px] bg-gradient-to-b from-pink-500 to-indigo-700 text-transparent bg-clip-text text-center px-[5px]'>EXCHANGE 5 PRODUCTS & GET 1 FREE PRODUCT.</p>
                <img src={Date} alt="" className='mt-[25px] sm:mt-[30px]' />
                <div className='flex justify-center items-center max-w-[870px] px-[5px]'>
                    <p className='  text-[16px] font-normal mt-[30px] sm:mt-[40px] leading-[28px] text-[#333333] px-[5px] text-center'>Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum voluptaria in. Ad mei modus quodsi complectitur, postea verterem persecuti cu est, sea epicuri.</p>
                </div>
                <Link to='/discover' >
                    <button className=' text-white mt-[30px] sm:mt-[40px] bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 rounded-[100px] w-[157px] h-[54px] font-bold text-[14px] text-center'>DISCOVER</button>
                </Link>
            </div>
            <div className='flex flex-col justify-center items-center mt-[20px]' >
                <img src={img} alt="" />
            </div>
            <div className='border max-w-[1170px] py-[15px] mx-auto  border-pink-300 rounded-bl-[15px] rounded-br-[15px] flex flex-col justify-center items-center '>
                <p className='text-[32px] font-bold leading-[45px]  mt-[15px] sm:mt-[20px] bg-gradient-to-b from-pink-500 to-indigo-700 text-transparent bg-clip-text text-center px-[5px]'>ETH TO NAIRA EXCHANGE RATE IS NOW #400 PER...</p>
                <img src={Date} alt="" className='mt-[25px] sm:mt-[30px]' />
                <div className='flex justify-center items-center max-w-[870px] px-[5px]'>
                    <p className='  text-[16px] font-normal mt-[30px] sm:mt-[40px] leading-[28px] text-[#333333] px-[5px] text-center'>Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum voluptaria in. Ad mei modus quodsi complectitur, postea verterem persecuti cu est, sea epicuri.</p>
                </div>
                <Link to='/discover' >
                    <button className=' text-white mt-[30px] sm:mt-[40px] bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 rounded-[100px] w-[157px] h-[54px] font-bold text-[14px] text-center'>DISCOVER</button>
                </Link>
            </div>
            <div className='flex justify-center items-center mx-3 my-36' >
                <img src={paginations} alt="" />
            </div>
        </div>
    )
}
export default Blog
