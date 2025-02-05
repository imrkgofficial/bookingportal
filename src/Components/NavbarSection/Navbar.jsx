import React from "react";
import doctorimg from "../Images/image-1.png";
const Navbar = () => {
  return (
    <div className="w-full h-[33.3rem] bg-slate-100">
      <div className="flex w-full h-[33.3rem] justify-center gap-2">
        <div className="w-[39.5rem] flex flex-col justify-center items-center">
          <div>
            <h1 className="text-blue-950 font-bold text-[5rem]">
              Your Health Is
            </h1>
            <h1 className="text-blue-950 font-bold text-[5rem]">
              Our Top Priority
            </h1>
          </div>
          <div className="mt-[1rem] mr-[12rem] font-serif text-lg">
            <p>There are many variations of passages of Ipsum available,</p>
            <p>but the majority have suffered.</p>
          </div>
          <button className="mt-[2rem] w-[13rem] h-[3.5rem] rounded-lg bg-blue-600 text-white outline-none mr-[24.5rem] border hover:bg-blue-700">
            Meet Our Specialist
          </button>
          <div className="flex mt-6 gap-28">
            <div className="flex flex-col gap-3 mt-5">
              <h1 className="text-blue-950 font-bold text-5xl">262 k+</h1>
              <p className="text-gray-500">Recovered Patients</p>
            </div>
            <div className="flex flex-col gap-3 mt-5">
              <h1 className="text-blue-950 font-bold text-5xl">94 %</h1>
              <p className="text-gray-500">Satisfaction Rate</p>
            </div>
            <div className="flex flex-col gap-3 mt-5">
              <h1 className="text-blue-950 font-bold text-5xl">86 +</h1>
              <p className="text-gray-500">Expert Doctors</p>
            </div>
          </div>
        </div>
        <div className="w-[39.5rem] flex justify-end">
          <img src={doctorimg} alt="" className="w-[40rem] mt-2 object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
