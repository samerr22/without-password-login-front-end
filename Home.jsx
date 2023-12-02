import React from "react";
import Logo from "/image/logo.png";
import Search from "/image/search.png";
import User from "/image/user.png";


function ghome() {
  return (
    <div className="relative h-screen w-screen bg-gray-50 ">
      <div className="">
        <img
          className="absolute w-[80px] mt-[80px] ml-[210px] lg:ml-[720px] lg:mt-2 lg:w-24 "
          src={Logo}
        />
        <h1
          style={{ fontFamily: "fantasy", color: "#111827" }}
          className=" absolute mt-[170px] text-[24px] ml-[150px]  w-80 tracking-wide lg:ml-[665px] lg:mt-24   "
        >
          Log in to Supademo
        </h1>

        <div className=" flex items-center justify-center sm:justify-start  h-[600px] w-screen  bg-white mt-[240px] absolute -mr-20 shadow-lg lg:w-[450px] lg:h-[500px] lg:mt-[165px] lg:ml-[540px] lg:rounded-lg  ">
          <button className=" absolute mt-[-450px] border-2 w-[450px] rounded-lg h-[45px] shadow-sm hover:bg-gray-100 lg:w-[400px] lg:h-[40px] lg:mt-[-400px] lg:ml-6 ">
            <h1 className="text-lg text-gray-700 font-medium lg:text-[15px]">
              {" "}
              Countinue with google
            </h1>
            <img
              className="absolute w-[20px] mt-[-25px] ml-[100px] lg:w-[16px] lg:mt-[-23px] "
              src={Search}
            />
          </button>
          <button className=" absolute mt-[-320px] border-2 w-[450px] rounded-lg h-[45px] shadow-sm hover:bg-gray-100 lg:w-[400px] lg:h-[40px] lg:mt-[-290px] lg:ml-6  ">
            <h1 className="text-lg text-gray-700 font-medium lg:text-[15px]">
              {" "}
              Login with SSO
            </h1>
            <img
              className="absolute w-[20px] mt-[-25px] ml-[130px] lg:w-[16px] lg:mt-[-22px] lg:ml-[125px]"
              src={User}
            />
          </button>

          <hr className="absolute h-3 bg-white mt-[-193px] ml-[-240px] w-[210px] lg:ml-[24px] lg:mt-[-170px] lg:w-[180px] " />
          <p className="absolute mt-[-205px]  text-gray-500 text-sm lg:mt-[-184px] lg:ml-[210px]">
            Or
          </p>
          <hr className="absolute h-1 bg-white mt-[-200px] ml-[240px] w-[210px] lg:ml-[230px] lg:w-[180px] lg:mt-[-176px] " />

          <h1 className="absolute mt-[-110px] ml-[-350px] font-medium text-gray-600 lg:ml-[26px]">
            Email address
          </h1>
          <input
            className="absoluet  w-[450px] rounded-lg h-[45px] shadow-sm border-2 mt-[-40px] lg:w-[400px] lg:h-[40px] lg:mt-[-35px] lg:ml-6"
            type="email"
            placeholder="  name@company.com"
          />

          <button
            style={{ backgroundColor: "#4f46e5" }}
            className="absolute  mt-[100px] w-[450px] rounded-lg h-[43px] bg-blue-500 text-white font-semibold hover:opacity-80 lg:w-[400px] lg:h-[40px] lg:mt-100px] lg:ml-6"
          >
            Log In with Email
          </button>

          <div className="absolute w-[450px] rounded-lg h-[55px] mt-60 border-2 bg-blue-50 border-white shadow-slate-300 lg:w-[400px] lg:h-[50px] lg:mt-[230px] lg:ml-6 ">
            <p className="absolute mt-3 font-serif text-blue-600 ml-[60px] lg:ml-[40px]">
              {" "}
              You'll receive a link for a password-free login.
            </p>
          </div>

          <p className="absolute mt-[380px] ml-[-110px] text-gray-500 lg:ml-[100px]">
            New to Supademo?
          </p>
          <p className="absolute mt-[380px] ml-[150px] text-blue-600 hover:underline cursor-pointer lg:ml-[240px]  ">
            Create Account
          </p>

          <hr className=" absolute w-screen h-0 mt-[480px] shadow-2xl lg:hidden" />
        </div>
      </div>
    </div>
  );
}
export default ghome;
