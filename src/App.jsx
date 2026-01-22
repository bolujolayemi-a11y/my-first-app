import React from 'react';
import './App.css';
// 1. Import your custom components
import Greeting from './components/Greeting';
import Profile from './components/Profile';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      {/* 2. Place your components here */}
      <Greeting />
      
      <hr /> {/* This adds a horizontal line to separate sections */}
      
      <Profile />
      
      <hr />

      {/* 3. Use the Button component 3 times with different text */}
      <div className="custom-button">
        <Button text="View Projects" />
        <Button text="Download CV" />
        <Button text="Contact Me" />
      </div>
    </div>
  );
}

export default App;