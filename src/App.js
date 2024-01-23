import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
function App() {
  const [count, setCount] = useState(0);
  const smileemojis = ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇"];
  const sademojis =["😞", "😒", "🙄", "😭", "😵‍💫", "😮‍💨", "😨", "😫" , "😣", "🫥"];
  const arrayLength = smileemojis.length
  const arrayIndex = count % arrayLength
  const emojiNicoNico = smileemojis[3]
  console.log("emoji", smileemojis)
  console.log("niconico", emojiNicoNico)
  const currentEmoji = smileemojis[arrayIndex];


  return (
    <div className="App">
  <header className="App-header">
    <div className="emoji">{currentEmoji}</div>
    <p>You clicked {count} times</p>
    <p>count % emojis.length: {count % emojis.length}</p>
    <button onClick={() => setCount(count + 1)}>Don't push</button>
    <button onClick={() => setCount(count + 1)}>

      <></>
      Make smile  </button>
    

  </header>
</div>
);


}

export default App;
