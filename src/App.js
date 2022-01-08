import React, { useState } from 'react';
import Panel from './components/Panel';
import Adder from './components/Adder';
import './style.css';

export default function App() {
  const [panel, setPanel] = useState([]);
  // add new panel
  const addNew = () => {
    setPanel([
      ...panel,
      {
        id: panel.length,
      },
    ]);
    const newAray = panel;
    localStorage.setItem('Panel', JSON.stringify(newAray));
  };
  // delete individual panel
  const delPanel = (id) => {
    const remainingPanels = panel.filter((item) => id !== item.id);
    setPanel(remainingPanels);
    localStorage.setItem('Panel', JSON.stringify(remainingPanels));
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
      {localStorage.getItem('Panel') &&
        JSON.parse(localStorage.getItem('Panel')).map((item) => (
          <Panel
            key={Math.floor(Math.random() * 9999)}
            id={item.id}
            gameNum={item.id + 2}
            delPanel={delPanel}
          />
        ))}
    </div>
  );
}
