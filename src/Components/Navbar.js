import { Link } from "react-router-dom";
import Logo from "../Image/coinbase.svg";
import Drop from '../Image/dropdown.svg'
import { CgMenuBoxed, CgClose } from "react-icons/cg";
import { useState } from "react";
import React from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  function dropDown() {
    setOpen(!open)
  }
  return (
    <header className="">

      <div className="flex items-center justify-between  mx-[30px] lg:mx-[96px]  max-md:flex-wrap ">
        <img src={Logo} alt="" className="mt-8 md:mt-12 mb-[44px] " />
        <div className="md:hidden block  mr-2">
          <CgMenuBoxed
            className="h-7 w-7 cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>


        {/* <CgMenuBoxed className='md:hidden block h-6 w-6 cursor-pointer' onClick={()=>setOpen(!open)} /> */}
        <nav
          className={` w-full flex items-center justify-left md:justify-end md:w-auto`}
        >

          {/* <nav className={`${open ? "block" : "hidden"}w-full md:flex md:items-center md:w-auto`}> */}
          <ul
            className={`text-base text-gray-600 flex-col mt-[20px] ${open ? "block" : "hidden"
              } md:flex md:flex-row md:justify-between md:items-center  `}
          >
            <Link
              to="/"
              className=" block text-black font-bold text-[14px]  mx-3 lg:mx-7"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-black font-bold text-[14px] mx-3 lg:mx-7 whitespace-nowrap "
            >
              About Us
            </Link>
            <Link
              to="/blog"
              className="block text-black font-bold text-[14px] mx-3 lg:mx-7 "
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="block  text-black font-bold text-[14px] mx-3 lg:mx-7  whitespace-nowrap "
            >
              Contact Us
            </Link>
            <div className='flex  justify-center pl-12 mr-5 gap-5'>
              <button id="dropdownOffsetButton" onClick={dropDown}
                data-dropdown-toggle="dropdownOffset"
                data-dropdown-offset-distance="10" data-dropdown-offset-skidding="100"
                data-dropdown-placement="right" className="text-[#333333] text-[14px] font-bold max-md:hidden h-fit  
            focus:ring-blue-300 
          text-md  text-center inline-flex items-center 
            "
                type="button">Sell Bitcoin/ Giftcard <img src={Drop} alt="" />
              </button>

              {/* <!-- Dropdown menu --> */}
              <div id="dropdownOffset" class={`z-10 mt-[19px] ml-12 border-[1px] border-[#E0E0E0]  max-md:hidden absolute  opacity-80 bg-white divide-y divide-gray-100 rounded-lg shadow w-36 h-20 dark:bg-white-700  ${open ? 'block' : 'hidden'}   `}>
                <ul className=" text-sm  text-black dark:text-gray-200" aria-labelledby="dropdownDefault">
                  <li>
                    <a href="#" className="block px-4 py-2 text-[#333333] text-[12px] hover:bg-white ">Sell Bitcoin</a>
                  </li>
                  <li>
                    <a href="#" className="block pl-4 py-3 mt-2 font-normal text-sm text-[#FFFFFF] text-[12px] rounded-bl-lg rounded-br-lg dark:hover:bg-white " style={{ background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)' }}>Sell Giftcard</a>
                  </li>

                </ul>
              </div>
            </div>

            <button className="text-white  rounded-[100px] w-[157px] h-[54px] font-bold max-md:mb-10 max-md:mt-3 text-[14px] text-center" style={{ background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)' }}>
              LOGIN
            </button>
          </ul>
        </nav>

      </div>

    </header>
  );
};

export default Navbar;
