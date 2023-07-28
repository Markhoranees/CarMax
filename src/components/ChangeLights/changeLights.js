import React, { useState } from 'react';

const ChangeLights = () => {
  const [currentLight, setCurrentLight] = useState();

  const changeLight = () => {
    if (currentLight === 'red') {
      setCurrentLight('green');
    } else if (currentLight === 'green') {
      setCurrentLight('yellow');
    } else {
      setCurrentLight('red');
    }
  };

  return (
    <div>
      <div style={{ width: '100px', height: '200px', background: 'black' }}>
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            margin: '20px auto',
            background: currentLight === 'red' ? 'red' : 'grey',
          }}
        />
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            margin: '20px auto',
            background: currentLight === 'yellow' ? 'yellow' : 'grey',
          }}
        />
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            margin: '20px auto',
            background: currentLight === 'green' ? 'green' : 'grey',
          }}
        />
      </div>
      <button onClick={changeLight}>Change Light</button>
    </div>
  );
};

export default ChangeLights;
