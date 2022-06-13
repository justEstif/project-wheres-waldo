//? react
import { Fragment, useState } from "react";
//? styling
// import "normalize.css";
import styled, { createGlobalStyle } from "styled-components";
//? assets
import { waldoImg } from "./assets";
//? components
import { Overlay, Image } from "./components/index";

const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  height: 100%;

  font-family: "ubuntu mono", "Courier New", Courier, monospace;
  }
`;

const App = ({}) => {
  const [position, setPosition] = useState([]);
  const handleClick = (e) => {
    const bnds = e.target.getBoundingClientRect();
    const x = e.clientX - bnds.left;
    const y = e.clientY - bnds.top;
    setPosition([x, y]);
  };

  return (
    <Fragment>
      <GlobalStyle />
      <Overlay position={position}></Overlay>
      <Image handleClick={handleClick} imgSrc={waldoImg}></Image>
    </Fragment>
  );
};

export default App;
