import React from 'react';
import '../style.css';

export default function Adder(props) {
  return (
    <div className="wrapAddDel">
      <button className="addBtn" onClick={props.addNew}>
        +
      </button>
      <button className="delAll" onClick={props.delAll}>
        X
      </button>
    </div>
  );
}
