import React from "react";
import { Link } from "react-router-dom";

       
    const Header = () =>{
  return (
    <>
 
    <header className="text-white bg-slate-800 font-Abadi body-font">

     
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-gray-900 p-2 bg-red-800 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-5 text-2xl font-serif text-orange-700">CaR MaXz</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center font-serif text-base justify-center">
          <Link to="/" className="mr-5 cursor-pointer text-white hover:text-yellow-500">Home</Link>
          <Link to="/category" className="mr-5 cursor-pointer text-white hover:text-yellow-500">Categories</Link>
          <Link to="/contact" className="mr-5 cursor-pointer text-white hover:text-yellow-500">Contact us</Link>
          <Link to="/signin" className="mr-5 cursor-pointer text-white hover:text-yellow-500">Sign In</Link>
          <Link to="/about" className="mr-5 cursor-pointer text-white hover:text-yellow-500">About</Link>
         
       
       </nav>
     

      </div>
    </header>
  
    </>
  );
};

export default Header;
