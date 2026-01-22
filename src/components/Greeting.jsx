import React from 'react';

const Greeting = () => {
  const myName = "Jolayemi Boluwatife"; 
  const currentYear = new Date().getFullYear();

  return (
    <div className="greeting-box">
      <h1>Welcome Message</h1>
      <p>Hello, I am {myName}!</p>
      <p>The year is: {currentYear}</p>
    </div>
  );
};

export default Greeting;