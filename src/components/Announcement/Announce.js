import React from 'react';

const Announce = () => {

  return (
    
    <div className="text-end bg-sky-800 text-white p-1 text-sm">
        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="6"
          className="font-sans"
        >
         Hurry up ! to be the first to get the newly arrived Audi R8
        </marquee>
      </div>

  );
};

export default Announce;