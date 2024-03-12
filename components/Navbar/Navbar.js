import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    console.log("toggled");
  };

  const router = useRouter();

  const handleSignInClick = () => {
    router.push('/Login');
  };

  return (
    <header className="bg-transperant sticky top-0 w-full font-mono">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-black font-bold text-xl">
            <img src='https://res.cloudinary.com/dchbfnlct/image/upload/v1710180420/circle_c4im2u.png' />
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-12">
              <li><a href="#" className="text-black"></a></li>
              <li><a href="#" className="text-black">About</a></li>
              <li><a href="#" className="text-black">Sell Property</a></li>
              <li><a href="#" className="text-black">Buy Property</a></li>
              <li><a href="#" className="text-black">Privacy Policy</a></li>
              <li><a href="#" className="text-black">Help</a></li>
            </ul>
          </div>

          {/* Donate button for desktop */}
          <div className="hidden md:block">
            <button className="bg-[#874cc2] h-[40px] w-[125px] border-1 rounded-md text-white mx-4">Get Started</button>
            
          
          <button className="bg-white border-2 border-[#874cc2] h-[40px] w-[125px] border-1 rounded-md text-[#874cc2]"  onClick={handleSignInClick}>Sign In</button>
           
          
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="outline-none mobile-menu-button" onClick={toggleMenu}>
              {menuVisible ? (
                <svg className="w-6 h-6 text-black" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6 text-black" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`mobile-menu md:hidden ${menuVisible ? 'block' : 'hidden'} flex justify-start z-10 transform ${menuVisible ? '-translate-x--10 ease-out' : 'translate-x-full ease-in'} transition-transform duration-300`}>
          <ul className="mt-8 w-[40vw] space-y-4 mx-0 m-auto">
            <li><a className="block py-2 text-black hover:bg-gray-300 rounded">Home</a></li>
            <li><a className="block py-2 text-black hover:bg-gray-300 rounded">About</a></li>
            <li><a className="block py-2 text-black hover:bg-gray-300 rounded">Services</a></li>
            <li><a className="block py-2 text-black hover:bg-gray-300 rounded">Contact</a></li>
            <button className='bg-[#2dad5c] h-[40px] w-[125px] border-1 rounded text-white'>Donate</button>
          </ul>
         
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
