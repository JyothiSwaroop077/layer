import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    
    <div className="min-h-screen justify-center bg-gradient-to-r from-[#a6a5d9] to-[#e8c5d7] bg-gradient-to-b from-white to-[#a6a5d9]">
       <Navbar />
      <div className="text-gray-800 p-8 flex flex-col justify-center items-center w-[50vw] text-center m-auto">
       
        <h1 className="text-[#371563] font-bold text-4xl leading-normal font-mono mt-5 ">Pioneering the Future of Real Estate with Blockchain Brilliance</h1>
        <p className="text-[#371563] font-normal text-lg leading-normal font-mono mt-5">
        Welcome to Ethereal Estates, where innovation meets integrity in the realm of real estate. Our groundbreaking project 
        leverages the power of blockchain, implemented through Solidity and Ether.js, to redefine the landscape of land 
        registration and property management. Say goodbye to the 
        complexities and uncertainties of traditional systems – we bring you a seamless, secure, and transparent solution.
        </p>

        <div className="hidden md:block flex justify-center items-center mt-8 space-x-6">
            <button className="bg-[#874cc2] h-[40px] w-[135px] border-1 rounded-md text-white mx-4">Sell Property</button>
            <button className="bg-white border-2 border-[#874cc2] h-[40px] w-[135px] border-1 rounded-md text-[#874cc2]">Buy Property</button>
          </div>


      </div>
      <div className="absolute bottom-0 w-full h-1/6">
        <div className="w-full mx-auto h-full bg-white rounded-t-full"></div>
      </div>
    </div>

    
  );
}
