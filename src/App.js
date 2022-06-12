// react
import { useState } from "react";
// styling
import "normalize.css";
// assets
import { waldoImg } from "./assets/index";
import { AppDiv, ImgDiv, Img, PosDiv } from "./components/StyledComponets";

const App = (props) => {
  const [position, setPosition] = useState([]);

  const handleChange = (e) => {
    const bnds = e.target.getBoundingClientRect();
    const x = parseInt(e.clientX - bnds.left);
    const y = parseInt(e.clientY - bnds.top);
    setPosition([x, y]);
  };

  return (
    <AppDiv>
      <h1>Simple React App</h1>
      <ImgDiv>
        <Img
          src={waldoImg}
          alt="Where's Waldo"
          onClick={(e) => handleChange(e)}
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
