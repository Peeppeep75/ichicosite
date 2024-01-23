import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
function App() {
  const [count, setCount] = useState(0);
  const [isSadMode, setIsSadMode] = useState(false);

  const smileemojis = ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇"];
  const sademojis = ["😞", "😒", "🙄", "😭", "😵‍💫", "😮‍💨", "😨", "😫" , "😣", "🫥"];
  const arrayLength = isSadMode ? sademojis.length : smileemojis.length; 
  const arrayIndex = count % arrayLength;
  const currentEmoji = isSadMode ? sademojis[arrayIndex] : smileemojis[arrayIndex]; 

  const handleDontPush = () => {
    setIsSadMode(true);
    setCount(count - 1);
  };

  const handleMakeSmile = () => {
    setIsSadMode(false);
    setCount(count + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="emoji">{currentEmoji}</div>
        <p>You clicked {count} times</p>
        <p>count % emojis.length: {count % arrayLength}</p>
        <button onClick={handleDontPush}>Don't push</button>
        <button onClick={handleMakeSmile}>Make smile</button>
      </header>
    </div>
  );
}

export default App;