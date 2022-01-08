import React, { useState } from 'react';
import '../style.css';
import './Panel.css';

export default function Panel(props) {
  const [ranWord, setRanWord] = useState('');
  const [col, setCol] = useState('');
  const words = ['green', 'yellow', 'purple', 'red', 'orange'];
  const colors = ['green', 'yellow', 'purple', 'red', 'orange'];
  // generate random word and color (for word)
  const generate = () => {
    setRanWord(words[Math.floor(Math.random() * words.length)]);
    setCol(colors[Math.floor(Math.random() * colors.length)]);
  };
  return (
    <div className="panelDiv">
      <div className="panelTop">
        <h3>Game Number {props.gameNum ? props.gameNum : 1}</h3>
        {props.delPanel && (
          <button className="delBtn" onClick={() => props.delPanel(props.id)}>
            X
          </button>
        )}
      </div>
      <button onClick={() => generate()}>new word!</button>
      <p style={{ color: col }}>{ranWord}</p>
    </div>
  );
}
