import React from 'react'
import contact from '../Image/contact.webp'
import contactLogo from '../Image/contactLogo.webp'
function Contact() {
    return (
        <div>
            <div className='Back bg-center  bg-cover w-full h-[1000px] md:h-[855px] px-[30px] md:justify-between flex-col flex md:flex-row   mt-10 '>
                <div className=' flex flex-col mt-[5px] md:mt-[100px] mx-auto'>
                    <p className='text-[12px] font-normal text-white '>HOME/CONTACT US</p>
                    <p className=' max-w-[426px] pb-[20px]  text-[40px] font-bold text-white '>24/7 Customer support
                        Including weekends.</p>
                    <p className='max-w-[460px]   leading-[27px] text-[18px] font-normal text-white'>We`re always there ti help regardless the number
                        of queries at hand.</p>
                </div>
                <div className=' mx-auto sm:mt-[30px] '>
                    <img src={contact} alt="" className='w-[400px] md:w-[530px] h-[300px] md:h-[530px]' />
                </div>
            </div>
            <div>
                <p className='text-center text-[17px] text-[#333333] font-normal w-[50%] mx-auto'>Please note that all message will be replied within the next 12hours </p>
            </div>
            <div className='flex flex-col sm:flex-row mt-[60px] gap-[46px] w-[50%] mx-auto '>
                <input type="text" placeholder='Name *' className='w-[80%]  h-[60px] pl-[20px] placeholder:text-[#2F2F2F] text-[#2F2F2F] border rounded-[5px] border-[#D1D1D1]' />
                <input type="text" placeholder='Email *' className='w-[80%] placeholder:text-[#2F2F2F]  h-[60px] pl-[20px] text-[14px] font-normal text-[#2F2F2F] border rounded-[5px] border-[#D1D1D1]' />
            </div>
            <div className=' mt-[30px] w-[50%] h-[190px] mx-auto border border-[#D1D1D1] rounded-[5px]'>

                <p className='text-[#2F2F2F] pl-5 pt-5 text-[14px] gap-[50px] font-normal'>Your Comment</p>
            </div>



            <div className='w-[50%] mx-auto'>



                <button className='text-white mt-[30px] sm:mt-[40px] bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 rounded-[100px] w-[100px] sm:w-[157px] h-[40px] mb-[115px] sm:h-[54px] font-bold text-[14px] text-center'>PUBLISH</button>
            </div>
            <div className='w-[50%] mx-auto mb-[70px] '>
                <img src={contactLogo} alt=""  className='w-[100%] mx-auto '/>
            </div>
            

        </div>
    )
}

export default Contact
