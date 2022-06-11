// react
import { useState } from "react";
// styling
import "normalize.css";
import "./App.css";
// assets
import { waldoImg } from "./assets/index";

const App = (props) => {
  const [position, setPosition] = useState([]);

  const handleChange = (e) => {
    const bnds = e.target.getBoundingClientRect();
    const x = e.clientX - bnds.left;
    const y = e.clientY - bnds.top;
    setPosition([x, y]);
  };
  return (
    <div className="App">
      <h1>Simple React App</h1>
      <div className="img-container">
        <img
          alt="Where's Waldo"
          src={waldoImg}
          onMouseMove={(e) => handleChange(e)}
        />
      </div>
      <div className="position-container">
        <div>x: {position[0]}</div>
        <div>y: {position[1]}</div>
      </div>
    </div>
  );
};

export default App;
