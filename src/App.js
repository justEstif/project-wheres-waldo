// react
import { useState } from "react";
// styling
import "normalize.css";
// assets
import { waldoImg } from "./assets";
import {
  AppDiv,
  OverlayDiv,
  OverlayP,
  PosDiv,
  ImgDiv,
  Img,
} from "./components/StyledComponets";

const App = (props) => {
  const [position, setPosition] = useState([]);
  const handleClick = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    // const x = e.clientX - bnds.left;
    // const y = e.clientY - bnds.top;
    setPosition([x, y]);
  };

  return (
    <AppDiv>
      <h1>Simple React App</h1>
      <OverlayDiv position={position}></OverlayDiv>
      <ImgDiv>
        <Img
          src={waldoImg}
          alt="Where's Waldo"
          onClick={(e) => handleClick(e)}
        />
      </ImgDiv>
      <PosDiv>
        <div>x: {position[0]}</div>
        <div>y: {position[1]}</div>
      </PosDiv>
    </AppDiv>
  );
};

export default App;

// <AppDiv>
//   <h1>Simple React App</h1>
//   <ImgDiv>
//     <Img
//       src={waldoImg}
//       alt="Where's Waldo"
//       onMouseMove={(e) => handleChange(e)}
//     />
//   </ImgDiv>
//   <PosDiv>
//     <div>x: {position[0]}</div>
//     <div>y: {position[1]}</div>
//   </PosDiv>
// </AppDiv>
