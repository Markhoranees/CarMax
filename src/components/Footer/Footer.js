import React, { useState } from 'react';

const Footer = () => {
  
  const [feedback, setFeedback] = useState('');

  const handleChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleClick = () => {
    console.log(feedback);
   alert("Your feedback is submitted !")
   setFeedback('')
 
  };

  return (
    <footer className="text-white bg-slate-900 body-font">
      <div className="border-t border-gray-200">
        <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
          <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
            <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
              <label
                htmlFor="footer-field"
                className="leading-7 text-sm font-serif font-semibold text-white"
              >
                
                Feedback
              </label>
              <input
                type="text"
                id="footer-field"
                name="footer-field"
                value={feedback}
                onChange={handleChange}bg-transparent~
                className="w-full bg-white bg-opacity-100 rounded border border-gray-300   focus:ring-red-200 focus:border-sky-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              className="inline-flex text-white bg-lime-700 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded"
              onClick={handleClick}
            >
              Submit
            </button>

          </div>
          {/* Rest of the code */}
        </div>
      </div>
      {/* Rest of the code */}
      <div className="bg-gray-300">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-800 text-sm text-center sm:text-left">
            © 2023 CaR MaXz —
            <a href="/" className="text-black ml-1" target="_blank" rel="noopener noreferrer">
              @carmaxzy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
