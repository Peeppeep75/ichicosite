import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
function App() {
  const [count, setCount] = useState(0);
  const emojis = ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇"];
  const currentEmoji = emojis[count % emojis.length];
  return (
    <div className="App">
  <header className="App-header">
    <div className="emoji">{currentEmoji}</div>
    <p>You clicked {count} times</p>
    <p>count % emojis.length: {count % emojis.length}</p>
    <button onClick={() => setCount(count + 1)}>
      Click me
    </button>
  </header>
</div>

  );
}

export default App;
