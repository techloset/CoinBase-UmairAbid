import React from "react";
import Img from "../Image/IMG2.svg";
import Line from "../Image/Line.svg";
import IMG from "../Image/IMG3.svg";
import Diamond from "../Image/Diamond.svg";
import Support from "../Image/Support.svg";
import Customer from "../Image/Customer.svg";
import Medal from "../Image/Medal.svg";
import Tree from "../Image/Tree.svg";
// import Rectangle from '../Image/Rectangle294.svg'
// import Rectangle2 from '../Image/Rectangle295.svg'
// import Rectangle3 from '../Image/Rectangle293.svg'
function About() {
  return (
    <div>
      <div className="Back bg-no-repeat bg-cover  flex-col h-[1000px] sm:h-[1000px] md:h-[1000px] lg:h-[950px] xl:h-[900px] flex lg:flex-row justify-center max-lg:relative max-lg:items-center lg:justify-between ">
        <div className=" mt-[50px] max-lg:-top-[1%] max-lg:mx-5 max-lg:absolute lg:mt-[100px] xl:mt-[152px] lg:ml-[100px] xl:ml-[182px]  flex flex-col  ">
          <p className="text-[12px] font-normal text-white ">HOME/ABOUT US</p>
          <p className="  text-[40px] font-bold text-white leading-[50px]  mt-[16px] md:leading-[60px]">
            Great service, <br />
            Professional support
          </p>
          <p className="  mt-[20px] leading-[27px]  text-[18px] font-normal text-white">
            CoinBase is a platform for trading your bitcoin and <br />
            giftcard at the best rate, why not give us a trial.
          </p>
        </div>
        <div className="mt-44 sm:mt-24 lg:mt-[98px] max-lg:mx-5 lg:mr-[30px] max-lg:top-[20%] max-lg:absolute xl:mr-[168px] max-w-[527px]">
          <img src={Img} alt="" className=" " />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center px-[20px] mt-[-8%] ">
        <p className="max-w-[512px] text-[18px] font-bold leading-[40px] bg-gradient-to-b from-pink-500 to-indigo-700 text-transparent bg-clip-text text-center ">
          “Morbi sagittis ultricies ex, a tempus lorem suscipit non. Donec
          semper leo ut lobortis condimentum. Orci varius natoque penatibus et
          magnis”
        </p>
        <img src={Line} alt="" className="mt-[15px]" />
        <p className="text-[14px] leading-[25px] font-normal text-black mt-[15px]">
          Ramon Ridwan • CEO CoinBase
        </p>
      </div>

      <div className="border h-[792px] w-[90%] sm:w-[70%] mt-[30px] rounded-[30px] border-pink-400 flex flex-col items-center  mx-auto ">
        <img src={IMG} alt="" className="w-[527px] my-8" />
        <p className="text-[28px] font-bold leading-[65px] bg-gradient-to-b from-pink-500 to-indigo-700 text-transparent bg-clip-text">
          {" "}
          About CoinBase
        </p>
        <img src={Line} alt="" />
        <p className=" my-[40px] mx-2 max-w-[542px] text-[16px] font-normal leading-[40px] text-black text-center">
          CoinBase is an online site and a p2admin platform that allows users to
          buy, sell and/ or exchange digital and fiat assets safely. Owned and
          managed by CoinBase Business Services established and Incoperated in
          Nigeria.
        </p>
        <div className="flex justify-center gap-5 my-10">
          <img src={Diamond} alt="" />
          <img src={Medal} alt="" />

          <img src={Support} alt="" />
          <img src={Customer} alt="" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="bg-gradient-to-b from-pink-500 to-indigo-700 mt-[40px] md:mt-[60px] lg:mt-[80px] xl:mt-[107px] text-transparent bg-clip-text text-[28px] font-bold leading-[65px]">
          Our history
        </p>
        <img src={Line} alt="" />
      </div>
      {/* Tree */}
      <div className="flex flex-row justify-center    mt-[50px]">
        <div className="max-w-[418px] flex flex-col justify-between max-sm:gap-36 mb-[70px] text-right pl-2 ">
          <div>
            <p className="text-[32px] font-bold text-[#DC66A2] mb-5">May 2010</p>
            <p className="text-[16px] font-normal text-black leading-[30px]  ">
              Ut enim mi, mattis at sollicitudin rhoncus, rhoncus eget sem.
              Curabitur aliquam tellus eu nisl suscipit, at vestibulum ex
              rutrum. Nulla facilisi. Cras ullamcorper pellentesque orci, nec
              vestibulum nibh.uspendisse
            </p>
          </div>
          <div>
            <p className="text-[32px] font-bold text-[#DC66A2] mb-5">May 2019</p>
            <p className="text-[16px] font-normal text-black leading-[30px]  ">
              Ut enim mi, mattis at sollicitudin rhoncus, rhoncus eget sem.
              Curabitur aliquam tellus eu nisl suscipit, at vestibulum ex
              rutrum. Nulla facilisi. Cras ullamcorper pellentesque orci, nec
              vestibulum nibh.uspendisse
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center  ">
          <img src={Tree} alt="" className=" h-[751px] " />
          <p className="text-[12px] font-bold text-black mt-[10px] ">
            To be continue…
          </p>
        </div>
        <div className="max-w-[418px] flex flex-col justify-center mb-[50px] pr-2 ">
          <p className="text-[32px] font-bold text-[#DC66A2] mb-5">May 2017</p>
          <p className="text-[16px] font-normal text-black leading-[30px] ">
            Ut enim mi, mattis at sollicitudin rhoncus, rhoncus eget sem.
            Curabitur aliquam tellus eu nisl suscipit, at vestibulum ex rutrum.
            Nulla facilisi. Cras ullamcorper pellentesque orci, nec vestibulum
            nibh.uspendisse
          </p>
        </div>
      </div>

      {/* Meat the team */}
      <div className="flex flex-col justify-center items-center mt-[125px]">
        <p className=" bg-gradient-to-b from-pink-500 to-indigo-700 text-transparent bg-clip-text text-[28px] font-bold mb-[8px]">
          Meet the team
        </p>
        <img src={Line} alt="" />
        <p className="text-[16px] max-w-[542px] px-[10px] sm:px-[25px] leading-[40px] mt-[29px] text-center font-normal text-black">
          Meet the team that makes the process of this system fast and painless
          as possible to provide you with good result{" "}
        </p>
      </div>
      {/* Z-index */}
      <div className="flex justify-center items-center mt-[50px] relative mx-5 ">
        <div className=" w-[299px] h-[185px] rounded-[15px] relative z-10 left-[10%]  p-4    bg-[#C4C4C4]"></div>
        <div className="w-[299px] h-[233px] rounded-[15px] relative z-10 left-[0%] shadow-xl box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.1)  bg-[#C4C4C4]"> </div>
        <div className=" w-[299px] h-[285px] rounded-[15px] absolute z-50 bg-gradient-to-b from-[#f19aca] to-[#987fae]">
          <p className="text-[12px] font-normal text-[#FFFFFF] ml-[50px] mt-[220px]">
            {" "}
            <span className="text-[12px] text-[#FFFFFF] font-bold">
              CEO <br />
            </span>
            Amanda Roth
          </p>
        </div>
        <div className="w-[299px] h-[233px] rounded-[15px] relative z-10 shadow-xl box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.1)   right-[0%] bg-[#C4C4C4]"></div>
        <div className=" w-[299px] h-[185px] rounded-[15px] relative z-0  right-[10%] bg-[#C4C4C4]"></div>
      </div>
      {/* Bottom */}
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
         <button className="text-white  rounded-[100px] w-[100px] sm:w-[157px] h-[40px] sm:h-[54px] font-bold text-[14px] text-center"   style={{ background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)' }}>
            DISCOVER
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
