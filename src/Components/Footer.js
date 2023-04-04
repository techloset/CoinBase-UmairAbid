import React from "react";
import Logo from "../Image/Logo2.svg";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { AiFillFacebook, AiOutlineTwitter } from "react-icons/ai";
import { TiSocialInstagram } from "react-icons/ti";
import Box from "../Image/1.svg";
import Box2 from "../Image/2.svg";

function Footer() {
  return (
    <div className=" flex justify-between  mx-auto w-[100%] border bg-[#151515] ">
      <div className="flex justify-between w-[80%] sm:w-[90%]  sm:mx-auto">
        <div className="flex flex-col w-[90%] sm:w-[50%] max-sm:mx-auto md:w-[35%] lg:w-[25%] justify-center mt-14 lg:mt-20   ">
          <div>
            <img src={Logo} alt="" className="w-[50%] mb-7 lg:mb-10  " />
            <p className="text-[14] font-normal  leading-[24px] text-[#A2A2A2]">
              {" "}
              Fusce ut elit aliquet, fermentum leo vel, tempus nunc. Fusce eu
              rhoncus augue. Fusce vel metus pharetra, fermentum
            </p>
          </div>
          <div className="flex gap-5 mt-10  ">
            <AiOutlineGooglePlus className=" text-white" />
            <AiFillFacebook className=" text-white" />
            <AiOutlineTwitter className="text-white" />
            <TiSocialInstagram className="text-white" />
          </div>
          <p className="text-[#989898] opacity-[40%] mt-8 mb-2 max-w-[213px] mr-8 whitespace-nowrap ">
            © 2019 Designed by Cr8tiv_yemmy
          </p>
        </div>
        <div className="hidden sm:flex flex-col w-[25%] ml-[70px] max-lg:ml-[100px]  mt-[70px] ">
          <p className="text-[18px] font-normal text-white flex-col sm:flex whitespace-nowrap">
            CoinBase Links
          </p>
          <ul className="text-[14px] font-normal text-[#A2A2A2] mt-[20px] ">
            <li className="pt-2 md:pt-3">Home</li>
            <li className="pt-2 md:pt-3">About Us</li>
            <li className="pt-2 md:pt-3">Blog</li>
            <li className="pt-2 md:pt-3">Sell</li>
            <li className="pt-2 md:pt-3">Contact Us</li>
          </ul>
        </div>
        <div className="hidden md:flex sm:flex-col mt-[69px]  w-[25%]  ">
          <p className="text-[18px] font-normal text-white ">Contact Us</p>
          <ul className="text-[12px] font-normal text-[#A2A2A2] mt-[20px] ">
            <li className="pt-2">(+234) 137632128</li>
            <li className="pt-2"> Coinbase@yahoo.com</li>
            <li className="pt-2">Address goes here</li>
          </ul>
          <p className="text-[12px] font-normal text-[#A2A2A2] pt-20">
            Download Our App
          </p>
        </div>
        <div className="hidden lg:flex flex-col w-[25%]   mt-16 ">
          <p className="text-[18px] font-normal text-white mb-10 ">
            CoinBase Instagram
          </p>
          <div className="grid grid-cols-4 grid-rows-2 gap-3 ">
            <img src={Box} alt="" />
            <img src={Box2} alt="" />
            <img src={Box} alt="" />
            <img src={Box} alt="" />
            <img src={Box} alt="" />
            <img src={Box} alt="" />
            <img src={Box} alt="" />
            <img src={Box} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
