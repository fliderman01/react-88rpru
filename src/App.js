import React, { useState, useEffect } from 'react';
import Panel from './components/Panel';
import Adder from './components/Adder';
import './style.css';

export default function App() {
  const [panel, setPanel] = useState(() => {
    // put 'panel' value from localStorage to panel
    const saved = localStorage.getItem('panel');
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });
  // add new panel
  const addNew = () => {
    setPanel([
      ...panel,
      {
        id: panel.length + 1,
      },
    ]);
  };
  // Save/update panel value in local Storage (on render)
  useEffect(() => {
    localStorage.setItem('panel', JSON.stringify(panel));
  });
  // delete individual panel
  const delPanel = (id) => {
    const remainingPanels = panel.filter((item) => id !== item.id);
    setPanel(remainingPanels);
  };

  // delete All Panels
  const delAll = () => {
    setPanel([]);
    localStorage.clear();
  };
  return (
    <div>
      <Panel />
      <Adder addNew={addNew} delAll={delAll} />
      {panel.map((item) => (
        <Panel
          key={Math.floor(Math.random() * 9999)}
          id={item.id}
          gameNum={item.id + 1}
          delPanel={delPanel}
        />
      ))}
    </div>
  );
}
