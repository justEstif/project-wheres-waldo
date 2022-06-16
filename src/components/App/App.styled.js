import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {
    min-height: 100vh;
    padding: 0;
    margin: 0;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;

const SAppDiv = styled.div`
  font-family: "ubuntu mono", "Courier New", Courier, monospace;
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;

  display: flex;
  flex-direction: column;
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export { GlobalStyle, SAppDiv };
