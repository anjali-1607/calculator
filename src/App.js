import React from "react";
import "./App.css";

export default function App() {
  const one = () => {};
  return (
    <>
      <div className="grand">
        <div className="grand_parent">
          <div className="parent">
            <input type="text "></input>
            <button className="child">Cl</button>
            <button className="child">DEL</button>
            <button className="child">%</button>
            <button className="child">/</button>
            <button className="child">7</button>
            <button className="child">8</button>
            <button className="child">9</button>
            <button className="child">*</button>
            <button className="child">4</button>
            <button className="child">5</button>
            <button className="child">6</button>
            <button className="child">-</button>
            <button className="child" onClick={one}>
              1
            </button>
            <button className="child">2</button>
            <button className="child">3</button>
            <button className="child">+</button>
            <button className="child">0</button>
            <button className="child">.</button>
            <button className="equal">=</button>
          </div>
        </div>
      </div>
    </>
  );
}
