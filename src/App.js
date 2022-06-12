// react
import { useState } from "react";
// styling
import "normalize.css";
// assets
import {
  AppDiv,
  OverlayDiv,
  PosDiv,
  ImgDiv,
} from "./components/StyledComponets";

const App = (props) => {
  const [position, setPosition] = useState([]);
  const handleClick = (e) => {
    const bnds = e.target.getBoundingClientRect();
    const x = e.clientX - bnds.left;
    const y = e.clientY - bnds.top;
    setPosition([x, y]);
  };

  return (
    <AppDiv>
      <OverlayDiv position={position}></OverlayDiv>
      <ImgDiv onClick={(e) => handleClick(e)}>
        <h1>Simple React App</h1>
      </ImgDiv>
      <PosDiv>
        <div>x: {position[0]}</div>
        <div>y: {position[1]}</div>
      </PosDiv>
    </AppDiv>
  );
};

export default App;
