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
          <Link to="/about" className="mr-5 cursor-pointer text-white hover:text-yellow-500">About</Link>
          <Link to="/signin" className="mr-5 cursor-pointer text-white hover:text-yellow-500">Sign In</Link>
          <Link to="/changeLights" className="mr-5 cursor-pointer text-white hover:text-yellow-500">Changelights</Link>
       
       </nav>
       <input
  class="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
  type="checkbox"
  role="switch"
  id="flexSwitchCheckDefault" 

  />
<label
  class="inline-block pl-[0.15rem] hover:cursor-pointer"
  for="flexSwitchCheckDefault">Enable Mode </label>

      </div>
    </header>
  
    </>
  );
};

export default Header;
