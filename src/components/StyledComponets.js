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
  /* display: ${(props) => (props.click ? "block" : "none")}; */
  // NOTE
  display: block;
  position: absolute;
  z-index: 2;

  /* background-color: rgba(0, 0, 0, 0.85);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: white; */

  margin-left: auto;
  margin-right: auto;
  background-color: rgba(255, 255, 255, 0.7);
  width: 150px;
  border-radius: 50%;
  height: 150px;

  // NOTE: maybe I could move the overlay based on the x and y
  bottom: 10px;
  left: 10px;
`;

const OverlayToggleBtn = styled.button`
  position: relative;
  z-index: 3;
`;

const OverlayP = styled.p`
  // NOTE
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 30px;
  color: white;
  transform: translate(-50%, -50%);
`;

export { AppDiv, OverlayDiv, OverlayP, OverlayToggleBtn };
