import { Fragment, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { waldoImg, rPlace } from "./assets";
import { Overlay, Image } from "./components/index";

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 0;
}

`;

const AppDiv = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  overflow: hidden;
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
    <AppDiv>
      <GlobalStyle />
      <Image handleClick={handleClick} imgSrc={rPlace}></Image>
    </AppDiv>
  );
};

export default App;
