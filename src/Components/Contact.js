import React from 'react'
import contact from '../Image/contact.webp'
import contactLogo from '../Image/contactLogo.webp'
function Contact() {
    return (
        <div>
            <div className="Back bg-no-repeat bg-cover  flex-col h-[1000px] sm:h-[1000px] md:h-[1000px] lg:h-[950px] xl:h-[900px] flex lg:flex-row justify-center max-lg:relative max-lg:items-center lg:justify-between ">
        <div className=" mt-[50px] max-lg:-top-[1%] max-lg:mx-5 max-lg:absolute lg:mt-[100px] xl:mt-[152px] lg:ml-[100px] xl:ml-[182px]  flex flex-col  ">
          <p className="text-[12px] font-normal text-white ">HOME/CONTACT US</p>
          <p className="  text-[40px] font-bold text-white leading-[50px]  mt-[16px] md:leading-[60px]">
          24/7 Customer support <br/>
Including weekends.
          </p>
          <p className="  mt-[20px] leading-[27px]  text-[18px] font-normal text-white">
          We’re always there ti help regardless the number <br/>
of queries at hand.
          </p>
        </div>
        <div className="mt-44 sm:mt-10 lg:mt-[50px]max-lg:mx-5 lg:mr-[30px] max-lg:top-[20%] max-lg:absolute xl:mr-[114px] max-w-[527px]">
          <img src={contact} alt="" className=" " />
        </div>
      </div>
            <div>
                <p className='text-center text-[17px] text-[#333333] font-normal w-[85%] md:w-[50%] mx-auto'>Please note that all message will be replied within the next 12hours </p>
            </div>
            <div className='flex flex-col sm:flex-row mt-[60px] gap-[46px] w-[85%] md:w-[50%] mx-auto '>
                <input type="text" placeholder='Name *' className='w-[80%]  h-[60px] pl-[20px] placeholder:text-[#2F2F2F] text-[#2F2F2F] border rounded-[5px] border-[#D1D1D1]' />
                <input type="text" placeholder='Email *' className='w-[80%] placeholder:text-[#2F2F2F]  h-[60px] pl-[20px] text-[14px] font-normal text-[#2F2F2F] border rounded-[5px] border-[#D1D1D1]' />
            </div>
            <div className=' mt-[30px] w-[85%] md:w-[50%] h-[190px] mx-auto border border-[#D1D1D1] rounded-[5px]'>

                <p className='text-[#2F2F2F] pl-5 pt-5 text-[14px] gap-[50px] font-normal'>Your Comment</p>
            </div>



            <div className='w-[85%] md:w-[50%] mx-auto mt-[50px] mb-[93px]'>



            <button className="text-white  rounded-[100px] w-[157px] h-[54px] font-bold text-[14px] text-center"   style={{ background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)' }}>
            PUBLISH
          </button>
            </div>
            <div className='w-[85%] md:w-[50%] mx-auto mb-[70px] '>
                <img src={contactLogo} alt=""  className='w-[100%] mx-auto '/>
            </div>
            

        </div>
    )
}

export default Contact
