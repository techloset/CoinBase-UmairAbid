import React from "react";
import IMG from "../Image/IMG.svg";
import Layer2 from "../Image/Layer 2.svg";
import Line from "../Image/Line.svg";
import Bitcoin from "../Image/Bitcoin.svg";
import Group from "../Image/Group 2.svg";
import Bank from "../Image/bank-building.svg";
import Transfer from "../Image/Transfer.svg";
import Double from "../Image/Double transfer.svg";
import Flex1 from "../Image/Flex1.svg";
import Gift from "../Image/Gift cards.svg";
import pb from '../Image/pb.png'
import path from '../Image/p.png'
import pt from '../Image/pt.png'
import Blogs from "./Blogs";
import Footer from "./Footer";
function LandingPage() {
  return (
    <div>
      <div className="flex flex-col justify-between" style={{ background: " linear-gradient(174.48deg, #FD749B -12.41%, #281AC8 88.56%)" }}>

        <div className="  md:bg-center w-[100%] max-lg:items-center md:justify-center flex-col flex lg:flex-row    " >
          <div className=" mt-[50px] md:mt-[100px] mb-[40px] lg:mb-[98px] md:ml-[100px]  flex flex-col mx-[5%]  ">
            <p className=" max-w-[520px] text-[40px]  text-white leading-[50px] md:leading-[60px]">
              We provide easy solution to exchange your <span className="bitcoin"> Bitcoin/ GiftCard for
                money</span>
            </p>
            <p className="max-w-[460px]  mt-[10px] md:mt-[21px]  md:leading-[27px] text-[18px] font-normal text-white">
              CoinBase is a platform for trading your bitcoin and giftcard at the
              best rate, why not give us a trial.
            </p>
            <button className="w-[157px] h-[54px] bg-[#FFFFFF] mt-[10px] md:mt-[30px] rounded-[100px]   "   >
              <p className=" bg-gradient-to-b from-pink-500 to-indigo-700 text-transparent bg-clip-text text-[14px] font-bold"> Get Started</p>
            </button>
          </div>
          <div className=" mx-[3px] flex justify-center items-center ">
            <img
              src={IMG}
              alt=""
              className="  md:mt-[80px]"
            />

          </div>

        </div>
        <img src={path} alt="" className="" />
      </div>

      <div className="w-[100%]  justify-center items-center  mt-10 flex  md:flex-row flex-col ">
        <div className="w-fit  ">
          <img src={Layer2} alt="" className="" />
        </div>
        <div className=" px-5">
          <p className="font-sans text-[28px] font-bold bg-gradient-to-b from-pink-500 to-indigo-700 text-transparent bg-clip-text">
            Welcome to CoinBase
          </p>
          <img src={Line} alt="" />
          <p className="text-black text-[16px] max-w-[542px] leading-10 py-10">
            We have the best rates . Simply start your exchange right now. Sign
            up for our Affiliate program and earn commission from each exchange.
            The earnings are credited in your account instantly and can be
            withdrawn right away. Also note some exchange directions are hidden
            for unregistered user. To ensure to have access to all our exchange
            directions and benefits kindly sign up and verify your identity.
          </p>
          <button className="text-white  rounded-[100px] w-[157px] h-[54px] font-bold text-[14px] text-center" style={{ background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)' }}>
            DISCOVER
          </button>
        </div>
      </div>
      {/* Card */}
      <div className="flex flex-col justify-between mt-14 mb-20" style={{ background: " linear-gradient(174.48deg, #FD749B -12.41%, #281AC8 88.56%)" }}>
        <img src={pt} alt="" />
        <div className=" w-full mx-auto  flex justify-center items-center ">
          <div className="border sm:h-auto my-10 rounded-[20px] w-[50%] md:w-[70%] text-black bg-white flex justify-around  p-[20px] sm:p-[50px]">
            <div className="md:flex-col flex-wrap">
              <h1
                className="bg-gradient-to-b from-pink-500 to-indigo-700 text-transparent bg-clip-text 
             text-lg font-bold flex border-b border-b-gray-500"
              >
                OUR RATES
              </h1>
              <div className=" md:flex md:gap-7 md:mb-6 md:mt-4">
                <img src={Bitcoin} alt="" />
                <p>BTC</p>
                <div className="flex flex-col">
                  <p>
                    We Buy @ <span className="font-bold"> ₦350/$</span>
                  </p>
                  <p>
                    We Sell @ <span className="font-bold"> ₦370/$</span>
                  </p>
                </div>
              </div>
              <div className="md:flex gap-8 ">
                <img src={Group} alt="" />
                <p>ETH</p>
                <div className="flex flex-col">
                  <p>
                    We Buy @ <span className="font-bold"> ₦345/$</span>
                  </p>

                  <p>
                    We Sell @ <span className="font-bold"> ₦370/$</span>
                  </p>
                </div>
              </div>
            </div>
            <div className=" md:flex-col flex-wrap md:block hidden">
              <h1
                className="bg-gradient-to-b from-pink-500 to-indigo-700 text-transparent bg-clip-text 
              text-lg font-bold border-b border-b-gray-500"
              >
                OUR RESERVES
              </h1>
              <div className="flex gap-7 my-5">
                <img src={Bank} alt="" />
                <p>Bank Transfer</p>
                <p>NGN</p>
              </div>
              <div>
                <p className="text-center font-bold mb-5">#3452030300303.24/$</p>
              </div>
              <div className="flex gap-6 mb-5">
                <img src={Bitcoin} alt="" />
                <p>Bitcoin</p>
                <p>
                  {" "}
                  <span className="font-bold">399.98 BTC</span>{" "}
                </p>
              </div>
              <div className="flex gap-8 mb-5">
                <img src={Group} alt="" />
                <p>Ethereum</p>
                <p>
                  <span className="font-bold">1000.00</span> ETH
                </p>
              </div>
            </div>
            <div className="md:flex-col flex-wrap lg:block   hidden">
              <h1
                className="bg-gradient-to-b from-pink-500 to-indigo-700 text-transparent bg-clip-text 
              text-lg font-bold border-b border-b-gray-500"
              >
                LATEST EXCHANGES
              </h1>
              <div>
                <button className=" text-white my-4 px-3 py-1 rounded-md" style={{ background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)' }}>
                  8 hours ago
                </button>
              </div>
              <div className="flex flex-col">
                <p className="flex leading-3">
                  Bitcoin BTC <img src={Transfer} alt="" /> Bank
                </p>
                <p>Transfer NGN</p>
              </div>
              <div className="flex my-4 gap-2">
                <p>
                  <span className="font-bold">1.16</span> BTC
                </p>
                <img src={Double} alt="" />
                <p>
                  <span className="font-bold">696152299929.23</span> NGN
                </p>
              </div>

              <div className="border-t border-t-gray-700">
                <p className="flex">
                  Amazon Card <img src={Transfer} alt="" /> Bank
                </p>
                <p>Transfer NGN</p>
              </div>
            </div>
          </div>
        </div>
        <img src={pb} alt="" />
      </div>
      {/* Flex */}
      <div className="max-w-[1320px] md:py-[80]  flex justify-around mx-[30px] sm:mx-[50px] md:mx-[70px] lg:mx-[100px] md:flex-row flex-col ">
        <div className="basis-[40%] ">
          <p className="font-sans text-[28px] font-bold bg-gradient-to-b from-pink-500 to-indigo-700 text-transparent bg-clip-text">
            Great experience <br />
            with CoinBase
          </p>
          <img src={Line} alt="" />
          <p className="text-black text-[16px] leading-10 py-10 ">
            CoinBase is an online site and a p2admin platform that allows users
            to buy, sell and/ or exchange digital and fiat assets safely. Owned
            and managed by CoinBase Business Services established and
            Incoperated in Nigeria.
          </p>
          <button className="text-white  rounded-[100px] w-[157px] h-[54px] font-bold text-[14px] text-center" style={{ background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)' }}>
            DISCOVER
          </button>
        </div>
        <div className="basis-[40%] ">
          <img src={Flex1} alt="" className="w-[500px]  " />
        </div>
      </div>
      {/* Rectangle */}
      <div className="rectangle w-[100%] mx-auto h-[519px]  mt-[80px] bg-cover bg-center flex items-center justify-center ">
        <div className="border w-[75%] sm:w-[65%]  h-[504px] rounded-[30px] mt-[200px] mx-auto bg-white shadow-md" >
          <div className="flex  flex-col justify-center items-center self-center">
            <p className="bg-gradient-to-b from-pink-500 to-indigo-700 text-transparent bg-clip-text font-bold text-3xl text-center mt-[60px] ">
              Trade from anywhere
            </p>
            <img src={Line} alt="" className=" mt-[15px] " />
          </div>

          <div className="flex flex-col   md:flex-row justify-center my-[20px] md:mt-[60px] gap-[40px] md:gap-[63px] mx-[10%] ">
            <div className="border max-md:h-[80%] md:h-[226px] max-md:w-[80%] md:w-[262px] border-gray-300 rounded-[15px] flex flex-col justify-center items-center self-center gap-5 md:gap-10 text-center ">
              <img
                src={Bitcoin}
                className="w-[60px] h-[60px] pt-4 md:pt-0"
              />
              <p className="font-bold text-[16px]">Bitcoin</p>
            </div>
            <div className="border max-md:h-[100%]  md:h-[226px] max-md:w-[80%] md:w-[262px]  border-gray-300 rounded-[15px]  flex flex-col justify-center items-center self-center gap-5 sm:gap-10  text-center">
              <img src={Gift} alt="" className="w-[60px] h-[60px]" />
              <p className="font-bold text-[14px] sm:text-[16px] ">
                Gift Cards
              </p>
            </div>
          </div>
        </div>
      </div>
      <Blogs />
    </div >
  );
}
export default LandingPage;
