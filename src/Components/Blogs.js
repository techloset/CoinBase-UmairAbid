import React from "react";
import Line from "../Image/Line.svg";
import Rectangle from "../Image/Rectangle2.svg";
import Group from "../Image/Group438.svg";
import store from "../Image/Store.svg";
import iphone from "../Image/X-1.svg";
import iphone12 from "../Image/X-2.svg";

function Blogs() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <p className="bg-gradient-to-b from-pink-500 to-indigo-700 text-transparent bg-clip-text mt-[230px] text-center text-[28px] font-bold">
          Our Blogs
        </p>
        <img src={Line} alt="" className=" " />
        <p className="text-[16px] font-normal my-[50px] mx-[4%]">
          Get to know the latest stuff via our blog post.
        </p>
      </div>
      <div className="flex flex-col items-center mx-auto gap-5 sm:flex sm:justify-center sm:items-center  sm:relative">
        <div className="border border-gray-600 w-[65%] h-auto sm:w-[200px] md:w-[280px] lg:w-[370px] sm:h-[286px] p-5 sm:p-4 sm:pr-2 md:p-6 lg:p-10 rounded-[15px] sm:absolute sm:left-[15%] sm:z-10 ">
          <div className="flex gap-5 mb-6 sm:mb-2 md:mb-4 lg:mb-6">
            <p className="text-[10px] font-normal text-gray-600">
              01 FEB, 2019
            </p>
            <img src={Rectangle} alt="" />
            <p className="text-[10px] font-normal text-gray-600">TECHNOLOGY</p>
          </div>
          <p className="lg:text-[20px] font-bold text-gray-600 mb-4 sm:mb-1 md:mb-3 lg:mb-4">
            HOW TO SELL YOUR ITUNES GIFTCARD WITH US .
          </p>
          <p className="lg:text-[10px] font-normal  text-gray-600 leading-[18px] mb-4 sm:mb-1 md:mb-3 lg:mb-4">
            {" "}
            Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum
            voluptaria in. Ad mei modus quodsi complectitur, postea...
          </p>
          <button className="h-[36px]  sm:h-[25px] md:h-[36px] w-[105px]  sm:w-[85px] md:w-[105px] rounded-[100px] bg-gray-600 text-white   text-[9px] font-bold">
            Read More
          </button>
        </div>
        <div className="border border-pink-400 shadow-md shadow-slate-400 bg-white sm:z-20  w-[80%]  sm:w-[250px] md:w-[350px] lg:w-[465px] h-auto sm:h-[400px] md:h-[358px] p-6 sm:p-6 md:p-10 lg:p-14 rounded-[15px]">
          <div className="flex gap-5 mb-4 sm:mb-2 md:mb-4 lg:mb-6">
            <p className="text-[10px] font-normal text-black">19 JUNE, 2019</p>
            <img src={Rectangle} alt="" />
            <p className="text-[10px] font-normal text-black">BUSINESS</p>
          </div>
          <p className="bg-gradient-to-b from-pink-500 to-indigo-700 text-transparent bg-clip-text text-2xl font-bold  mb-4 sm:mb-2 md:mb-3 lg:mb-4">
            ETH TO NAIRA EXCHANGE RATE IS NOW #400 PER...
          </p>
          <p className="text-[12px] font-normal leading-7 text-black mb-6 sm:mb-3 md:mb-6 lg:mb-8">
            Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum
            voluptaria in. Ad mei modus quodsi complectitur, postea...
          </p>
          <button className="h-[43px] sm:h-[35px] md:h-[43px] w-[127px] sm:w-[100px] md:w-[127px] rounded-[100px] bg-gradient-to-b from-pink-500 to-indigo-900  text-white text-[11px] font-bold">
            Read More
          </button>
        </div>
        <div className="border border-gray-600 w-[65%] h-auto sm:w-[200px] md:w-[280px] lg:w-[370px] sm:h-[286px] p-5 sm:p-4 sm:pl-4 md:pl-6 lg:ml-10 md:p-6 lg:p-10  rounded-[15px] sm:absolute sm:right-[15%] sm:z-10">
          <div className="flex gap-5 mb-6 sm:mb-2 md:mb-4 lg:mb-6">
            <p className="text-[10px] font-normal text-gray-600">
              01 FEB, 2019
            </p>
            <img src={Rectangle} alt="" />
            <p className="text-[10px] font-normal text-gray-600">TECHNOLOGY</p>
          </div>
          <p className="lg:text-[20px] font-bold text-gray-600 mb-4 sm:mb-1 md:mb-3 lg:mb-4">
            HOW TO SELL YOUR ITUNES GIFTCARD WITH US .
          </p>
          <p className="lg:text-[10px] font-normal  text-gray-600 leading-[18px] mb-4 sm:mb-1 md:mb-3 lg:mb-4">
            {" "}
            Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum
            voluptaria in. Ad mei modus quodsi complectitur, postea...
          </p>
          <button className="h-[36px]  sm:h-[25px] md:h-[36px] w-[105px]   sm:w-[85px] md:w-[105px] rounded-[100px] bg-gray-600 text-white   text-[9px] font-bold">
            Read More
          </button>
        </div>
      </div>
      {/* Bubble */}
      <div className="bubble bg-cover bg-center bg-no-repeat sm:bg-bottom mt-[50px] sm:mt-[150px] -top-[55px] sm:-top-[400px] md:-top-[350px] lg:-top-[300px] xl:-top-[200px]  relative   sm:h-[1386px]  w-[100%] mx-auto flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <p className="text-center text-[28px] font-bold text-white leading-[42px] mt-[400px] sm:mt-[200px] xl:mt-[5px]">
            10,000 Satisfied clients <br />
            around the world
          </p>
          <img src={Line} alt="" className="mt-[20px] " />
          <p className="mt-[70px] sm:mt-[45px] max-w-[542px] mx-[3%] text-center text-white font-normal text-[16px]">Yeah! we`re proud with numbers. We`ve helped thousands of clients all around the world with our bespoke service. Hover ontop of them pic to view their testimonials.</p>
        </div>
        <div className="h-[60%] sm:h-[388px]  max-w-[1065px] ">
          <img
            src={Group}
            alt=""
            className="h-[388px] w-[80%] mx-auto  mb-20    sm:mt-20"
          />
        </div>
      </div>
      {/* Mobile */}
      <div className="mobile w-[100%] items-center bg-center  bg-no-repeat  flex justify-center sm:-top-96 lg:-top-52  h-[657px]  relative">
        <div className="flex flex-col justify-center items-center absolute -top-[250px] mt-24 sm:mt-0 ">
          <p className="bg-gradient-to-b from-pink-500 to-indigo-900 text-transparent bg-clip-text mt-[50px] sm:mt-[150px] lg:mt-[150px] text-center leading-[65px] text-[28px] font-bold">
            Download our apps
          </p>
          <img src={Line} alt="" className="h-[40px] w-[50px] pb-[30px]" />
          <p className="text-[16px] font-normal leading-[40px] text-center">
            Discover exclusive deals and discounts with <br />
            our mobile experience.
          </p>
          <img src={store} alt="" />
        </div>
        <div className="flex justify-center -bottom-[100px]  sm:-bottom-[200px] gap-5 sm:gap-16 md:gap-24  absolute">
          <img
            src={iphone}
            alt=""
            className="h-[40%] sm:h-[566px] w-[35%] sm:w-[283px]"
          />
          <img
            src={iphone12}
            alt=""
            className="h-[40%] sm:h-[566px] w-[35%] sm:w-[283px]"
          />
        </div>
      </div>
      {/* Input */}
      <div className="flex flex-col justify-center items-center  relative ">
        <p className="bg-gradient-to-b from-pink-500 to-indigo-700 text-transparent bg-clip-text pt-[30px] mt-[180px] text-center leading-[40px]  sm:leading-[65px] text-[22px] sm:text-[28px] font-bold ">
          Subscribe our newsletter{" "}
        </p>
        <img
          src={Line}
          alt=""
          className="h-[40px] w-[50px]  pb-[30px] sm:bottom-[270px] absolute"
        />
        <p className="text-[14px] sm:text-[16px] font-normal leading-[40px] text-center pt-9">
          Subscribe to our newsletter for daily/weekly <br /> update of our
          products and services.
        </p>
        <div className=" flex flex-col sm:flex-row justify-center gap-5 pt-20 pb-11 ">
          <input
            type="text"
            placeholder="EMAIL "
            className="max-w-[388px] h-[40px] sm:h-[54px] rounded-[100px] border text-[20px] font-normal placeholder:text-black pl-[20px] border-pink-400"
          />
          <button className="text-white  rounded-[100px] w-[100px] sm:w-[157px] h-[40px] sm:h-[54px] font-bold text-[14px] text-center" style={{ background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)' }}>
            DISCOVER
          </button>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
