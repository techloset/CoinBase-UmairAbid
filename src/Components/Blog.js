import React from "react";
import IMG from "../Image/IMG6.webp";
import IMG7 from "../Image/img7.png";
import Date from "../Image/Date.png";
import social from "../Image/social.png";
import img from "../Image/img8.webp";
import paginations from "../Image/paginations.png";
import Discover from "./Discover";
import { Link } from "react-router-dom";
function Blog() {
  return (
    <div>
      <div className="Back bg-no-repeat bg-cover  flex-col h-[1000px] sm:h-[1000px] md:h-[1000px] lg:h-[950px] xl:h-[900px] flex lg:flex-row justify-center max-lg:relative max-lg:items-center lg:justify-between ">
        <div className=" mt-[50px] max-lg:-top-[1%] max-lg:mx-5 max-lg:absolute lg:mt-[100px] xl:mt-[152px] lg:ml-[100px] xl:ml-[182px]  flex flex-col  ">
          <p className="text-[12px] font-normal text-white ">HOME/BLOG</p>
          <p className="  text-[40px] font-bold text-white leading-[50px]  mt-[16px] md:leading-[60px]">
            Stay updated, <br /> Never miss a post.
          </p>
          <p className="  mt-[20px] leading-[27px]  text-[18px] font-normal text-white">
            Get to know the latest stuff about our services <br /> via our blog
            post.
          </p>
        </div>
        <div className="mt-32 sm:mt-10 lg:mt-[28px]max-lg:mx-5 lg:mr-[30px] max-lg:top-[20%] max-lg:absolute xl:mr-[176px] max-w-[527px]">
          <img src={IMG} alt="" className=" " />
        </div>
      </div>

      <div className="flex flex-col  justify-center items-center mt-[20px]">
        <img src={IMG7} alt="" className="w-[85%] sm:w-[78%] mx-auto" />
      </div> 

      <div className="border  w-[85%] sm:w-[78%] py-[15px] mx-auto  border-pink-300 rounded-bl-[15px] rounded-br-[15px] flex flex-col justify-center items-center ">
        <p className="text-[32px] font-bold leading-[45px]  mt-[15px] sm:mt-[60px] bg-gradient-to-b from-pink-500 to-indigo-700 text-transparent bg-clip-text text-center px-[5px]">
          HOW TO SELL YOUR ITUNES GIFTCARD WITH US .
        </p>
        <img src={Date} alt="" className="mt-[25px] sm:mt-[15px]" />
        <div className="flex justify-center items-center max-w-[870px] px-[5px]">
          <p className="  text-[16px] font-normal mt-[30px] sm:mt-[29px] leading-[28px] h-[80px] text-[#333333] px-[5px] text-center">
            Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum
            voluptaria in. Ad mei modus quodsi complectitur, postea verterem
            persecuti cu est, sea epicuri.
          </p>
        </div>
        <Link to="/discover">
        <button className="text-white mb-[39px] mt-[110px] sm:mt-[11px]  rounded-[100px] w-[157px] h-[54px] font-bold text-[14px] text-center"   style={{ background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)' }}>
            DISCOVER
          </button>
        </Link>
      </div> 
      <div className="flex flex-col  justify-center items-center mt-[60px]">
        <img src={social} alt="" className="w-[85%] sm:w-[78%] mx-auto" />
      </div> 

      <div className="border w-[85%]  sm:w-[78%] py-[15px] mx-auto  border-pink-300 rounded-bl-[15px] rounded-br-[15px] flex flex-col justify-center items-center ">
        <p className="text-[32px] font-bold leading-[45px]  mt-[15px] sm:mt-[60px] bg-gradient-to-b from-pink-500 to-indigo-700 text-transparent bg-clip-text text-center px-[5px]">
        EXCHANGE 5 PRODUCTS & GET 1 FREE PRODUCT.
        </p>
        <img src={Date} alt="" className="mt-[25px] sm:mt-[15px]" />
        <div className="flex justify-center items-center max-w-[870px] px-[5px]">
          <p className="  text-[16px] font-normal mt-[30px] sm:mt-[29px] leading-[28px] h-[80px] text-[#333333] px-[5px] text-center">
            Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum
            voluptaria in. Ad mei modus quodsi complectitur, postea verterem
            persecuti cu est, sea epicuri.
          </p>
        </div>
        <Link to="/discover">
        <button className="text-white mb-[39px] mt-[110px] sm:mt-[11px]  rounded-[100px] w-[157px] h-[54px] font-bold text-[14px] text-center"   style={{ background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)' }}>
            DISCOVER
          </button>
        </Link>
      </div> 
      <div className="flex flex-col  justify-center items-center mt-[60px]">
        <img src={img} alt="" className="w-[85%] sm:w-[78%] mx-auto" />
      </div> 

      <div className="border w-[85%] sm:w-[78%] py-[15px] mx-auto  border-pink-300 rounded-bl-[15px] rounded-br-[15px] flex flex-col justify-center items-center ">
        <p className="text-[32px] font-bold leading-[45px]  mt-[15px] sm:mt-[60px] bg-gradient-to-b from-pink-500 to-indigo-700 text-transparent bg-clip-text text-center px-[5px]">
        ETH TO NAIRA EXCHANGE RATE IS NOW #400 PER...
        </p>
        <img src={Date} alt="" className="mt-[25px] sm:mt-[15px]" />
        <div className="flex justify-center items-center max-w-[870px] px-[5px]">
          <p className="  text-[16px] font-normal mt-[30px] sm:mt-[29px] leading-[28px] h-[80px] text-[#333333] px-[5px] text-center">
            Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum
            voluptaria in. Ad mei modus quodsi complectitur, postea verterem
            persecuti cu est, sea epicuri.
          </p>
        </div>
        <Link to="/discover">
        <button className="text-white mb-[39px] mt-[110px] sm:mt-[11px]  rounded-[100px] w-[157px] h-[54px] font-bold text-[14px] text-center"   style={{ background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)' }}>
            DISCOVER
          </button>
        </Link>
      </div> 
      <div className="flex justify-center items-center mx-3 my-36">
        <img src={paginations} alt="" />
      </div>
    </div>
  );
}
export default Blog;
