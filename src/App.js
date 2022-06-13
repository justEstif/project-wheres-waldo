import { Fragment, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { rPlace } from "./assets";
import { Overlay, Image } from "./components/index";

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  min-height: 100vh;
  padding: 0;
  margin: 0;
}
`;

const AppDiv = styled.div`
  font-family: "ubuntu mono", "Courier New", Courier, monospace;
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;

  display: flex;
  flex-direction: column;
  /* overflow: hidden; */
`;

const App = ({}) => {
  const [position, setPosition] = useState([]);
  const handleClick = (e) => {
    const bnds = e.target.getBoundingClientRect();
    const x = e.clientX - bnds.left;
    const y = e.clientY - bnds.top;
    // ! remove this later
    console.log(`(${x}, ${y})`);
    setPosition([x, y]);
  };

  return (
    <Fragment>
      <GlobalStyle />
      <AppDiv>
        <Overlay position={position}></Overlay>
        <Image handleClick={handleClick} imgSrc={rPlace}></Image>
      </AppDiv>
    </Fragment>
  );
};

export default App;
