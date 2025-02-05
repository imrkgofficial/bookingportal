import React from "react";
import logo from "../Images/Logo.svg";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    <div className="top-0 sticky">
      <div className="bg-slate-100 shadow-sm">
        <img src={logo} alt="" className="absolute top-2 ml-[3rem]" />
        <ul className="flex justify-center gap-[4rem] h-[4rem] items-center">
          <div className="flex items-center gap-2 text-gray-400">
            <li className="text-[16px] text-gray-400 cursor-pointer">Home</li>
            <IoIosArrowDown className="cursor-pointer" />
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <li className="text-[16px] text-gray-400 cursor-pointer">Page</li>
            <IoIosArrowDown className="cursor-pointer" />
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <li className="text-[16px] text-gray-400 cursor-pointer">Doctor</li>
            <IoIosArrowDown className="cursor-pointer" />
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <li className="text-[16px] text-gray-400 cursor-pointer">Shop</li>
            <IoIosArrowDown className="cursor-pointer" />
          </div>
        </ul>
      </div>
      <button className="absolute ml-[70rem] top-1 p-3 w-[12rem] bg-blue-600 rounded-xl border font-medium text-white">
        Free Consultation
      </button>
    </div>
  );
};
export default Header;