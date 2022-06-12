import styled from "styled-components";
import { waldoImg } from "../assets/index";

const AppDiv = styled.div`
  font-family: "ubuntu mono", "Courier New", Courier, monospace;
  height: 100vh;
  width: 100vw;
  background: url(${waldoImg}) no-repeat center center fixed;
  background-size: cover;
`;
const OverlayDiv = styled.div`
  display: ${(props) => (props.click ? "block" : "none")};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.85);
  z-index: 2;
  color: white;
`;

const OverlayToggleBtn = styled.button`
  position: relative;
  z-index: 3;
`;

const OverlayP = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 50px;
  color: white;
  transform: translate(-50%, -50%);
`;

export { AppDiv, OverlayDiv, OverlayP, OverlayToggleBtn };
