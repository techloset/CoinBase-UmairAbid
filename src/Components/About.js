import React from 'react'
import Img from '../Image/IMG2.svg'
import Line from '../Image/Line.svg'
import IMG from '../Image/IMG3.svg'
import Diamond from '../Image/Diamond.svg'
import Support from '../Image/Support.svg'
import Customer from '../Image/Customer.svg'
import Medal from '../Image/Medal.svg'
import Tree from '../Image/Tree.svg'
// import Rectangle from '../Image/Rectangle294.svg'
// import Rectangle2 from '../Image/Rectangle295.svg'
// import Rectangle3 from '../Image/Rectangle293.svg'
function About() {
    return (
        <div>
           <div className='Back h-[970px] md:h-[792px] bg-no-repeat bg-center w-[100%] mt-[5px] md:mt-[50px] max-md:items-center md:justify-around flex-col flex md:flex-row    '>
                <div className='pt-[100px]  flex flex-col mx-[5%]  '>
                    <p className='text-[12px] font-normal text-white '>HOME/BLOG</p>
                    <p className=' max-w-[373px] text-[40px] font-bold text-white leading-[50px] md:leading-[60px]'>Stay updated, 
                        Never miss a post.</p>
                    <p className='max-w-[410px]   leading-[27px] text-[18px] font-normal text-white'>Get to know the latest stuff about our services
                        via our blog post.</p>
                </div>
                <div className=' mx-[3px] '>
                    <img src={Img} alt="" className=' w-[300px] sm:w-[380px] md:w-[450px] lg:w-[549px] mx-auto h-[300px] md:h-[530px]' />
                </div>
            </div>
            <div className='flex flex-col justify-center items-center px-[20px]'>
                <p className='max-w-[512px] text-[18px] font-bold leading-[40px] bg-gradient-to-b from-pink-500 to-indigo-700 text-transparent bg-clip-text text-center '>“Morbi sagittis ultricies ex, a tempus lorem suscipit non. Donec semper leo ut lobortis condimentum. Orci varius natoque penatibus et magnis”</p>
                <img src={Line} alt="" className='mt-[15px]' />
                <p className='text-[14px] leading-[25px] font-normal text-black mt-[15px]'>Ramon Ridwan • CEO CoinBase</p>
            </div>

            <div className='border h-[792px] max-w-[1048px] mt-[30px] rounded-[30px] border-pink-400 flex flex-col items-center mx-auto '>
                <img src={IMG} alt="" className='w-[527px] my-8' />
                <p className='text-[28px] font-bold leading-[65px] bg-gradient-to-b from-pink-500 to-indigo-700 text-transparent bg-clip-text'>  About CoinBase</p>
                <img src={Line} alt="" />
                <p className=' my-[40px] max-w-[542px] text-[16px] font-normal leading-[40px] text-black text-center'>CoinBase is an online site and a p2admin platform that allows users to buy, sell and/ or exchange digital and fiat assets safely. Owned and managed by CoinBase Business Services established and Incoperated in Nigeria.
                </p>
                <div className='flex justify-center gap-5 my-10'>
                    <img src={Diamond} alt="" />
                    <img src={Medal} alt="" />


                    <img src={Support} alt="" />
                    <img src={Customer} alt="" />
                </div>


            </div>
            <div className='flex flex-col justify-center items-center'>
                <p className='bg-gradient-to-b from-pink-500 to-indigo-700 text-transparent bg-clip-text text-[28px] font-bold leading-[65px]'>Our history</p>
                <img src={Line} alt="" />

            </div>
            {/* Tree */}
            <div className='flex flex-row justify-center   my-[50px]'>
                <div className='flex flex-col justify-between my-10' >
                    <div className='max-w-[418px]  text-right flex flex-col gap-5'>
                        <p className='text-[32px] font-semibold  bg-gradient-to-b from-pink-500 to-indigo-700 text-transparent bg-clip-text'>May 2010</p>
                        <p className='text-[14px] leading-[30px] font-normal text-black'>
                            Ut enim mi, mattis at sollicitudin rhoncus, rhoncus eget sem. Curabitur aliquam tellus eu nisl suscipit, at vestibulum ex rutrum. Nulla facilisi. Cras ullamcorper pellentesque orci, nec vestibulum nibh.uspendisse</p>
                    </div>
                    <div className='max-w-[418px] text-right flex flex-col gap-5'>
                        <p className='text-[32px] font-semibold  bg-gradient-to-b from-pink-500 to-indigo-700 text-transparent bg-clip-text'>May 2019</p>
                        <p className='text-[14px] leading-[30px] font-normal text-black'>
                            Ut enim mi, mattis at sollicitudin rhoncus, rhoncus eget sem. Curabitur aliquam tellus eu nisl suscipit, at vestibulum ex rutrum. Nulla facilisi. Cras ullamcorper pellentesque orci, nec vestibulum nibh.uspendisse</p>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='h-full   '>
                        <img src={Tree} alt="" className='h-full   ' />
                    </div>
                    <p className='text-[12px] font-bold text-black text-center'>To be continue…</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='max-w-[418px] text-left flex flex-col gap-5'>
                        <p className='text-[32px] font-semibold  bg-gradient-to-b from-pink-500 to-indigo-700 text-transparent bg-clip-text'>May 2019</p>
                        <p className='text-[14px] leading-[30px] font-normal text-black '>
                            Ut enim mi, mattis at sollicitudin rhoncus, rhoncus eget sem. Curabitur aliquam tellus eu nisl suscipit, at vestibulum ex rutrum. Nulla facilisi. Cras ullamcorper pellentesque orci, nec vestibulum nibh.uspendisse</p>
                    </div>
                </div>
            </div>
            {/* Meat the team */}
            <div className='flex flex-col justify-center items-center'>
                <p className=' bg-gradient-to-b from-pink-500 to-indigo-700 text-transparent bg-clip-text text-[28px] font-bold'>Meet the team</p>
                <img src={Line} alt="" />
                <p className='text-[16px] max-w-[542px] px-[15px] mt-[30px] text-center font-normal text-black'>Meet the team that  makes the process of this system fast and painless as possible to provide you with good result </p>
            </div>
            {/* Z-index */}
            <div className='flex justify-center items-center mt-[50px] relative '>
                <div className=' w-[299px] h-[185px] rounded-[15px] relative z-10 left-[10%]  bg-gray-400 opacity-100'>

                </div>
                <div className='w-[299px] h-[233px] rounded-[15px] relative z-10 left-[0%] bg-gray-400 opacity-100'>

                </div>
                <div className=' w-[299px] h-[285px] rounded-[15px] absolute z-50 bg-gradient-to-b from-[#f19aca] to-[#987fae]   text-transparent '>
                    <p className='text-[12px] font-normal text-[#FFFFFF] ml-[50px] mt-[220px]'> <span className='text-[12px] text-[#FFFFFF] font-bold'>CEO <br /></span>
                        Amanda Roth</p>
                </div>
                <div className='w-[299px] h-[233px] rounded-[15px] relative z-10 right-[0%] bg-gray-400 opacity-100'>

                </div>
                <div className=' w-[299px] h-[185px] rounded-[15px] relative z-0  right-[10%] bg-gray-400 opacity-100'>

                </div>
            </div>
            {/* Bottom */}
            <div className='flex flex-col justify-center items-center  relative '>
                <p className='bg-gradient-to-b from-pink-500 to-indigo-700 text-transparent bg-clip-text pt-[30px] mt-[180px] text-center leading-[40px]  sm:leading-[65px] text-[22px] sm:text-[28px] font-bold '>Subscribe our newsletter </p>
                <img src={Line} alt="" className='h-[40px] w-[50px]  pb-[30px] sm:bottom-[270px] absolute' />
                <p className='text-[14px] sm:text-[16px] font-normal leading-[40px] text-center pt-9'>Subscribe to our newsletter for daily/weekly <br /> update of our products and services.</p>
                <div className=' flex justify-center gap-5 pt-20 pb-11 '>


                    <input type="text" placeholder='EMAIL ' className='w-[200px] sm:w-[388px] h-[40px] sm:h-[54px] rounded-[100px] border text-[20px] font-normal placeholder:text-black pl-[20px] border-pink-400' />
                    <button className='bg-gradient-to-b from-pink-500 to-indigo-700  text-white w-[80px] sm:w-[157px] h-[40px] sm:h-[54px] rounded-[100px]  text-[14px] font-bold'>DISCOVER</button>
                </div>
            </div>



        </div>
    )
}

export default About
