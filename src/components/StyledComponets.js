import styled from "styled-components";
import { waldoImg } from "../assets/index";

const AppDiv = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap");
  display: flex;
  flex-direction: column;
  font-family: "ubuntu mono", "Courier New", Courier, monospace;
  text-align: center;
`;
// const AppDiv = styled.div`
//   font-family: "ubuntu mono", "Courier New", Courier, monospace;
//   height: 100vh;
//   width: 100vw;
//   background: url(${waldoImg}) no-repeat center center fixed;
//   background-size: cover;
// `;

const OverlayDiv = styled.div`
  // NOTE created a different thing
  display: ${(props) => (props.position ? "block" : "none")};
  position: absolute;
  z-index: 2;

  /* top: 0;
  left: 0;
  right: 0;
  bottom: 0; */

  // NOTE IDK
  /* margin-left: auto;
  margin-right: auto; */

  background-color: black;
  width: 25px;
  height: 25px;
  border-radius: 50%;

  // NOTE: this is inaccurate
  left: ${(props) => props.position[0] + "px"};
  top: ${(props) => props.position[1] + "px"};
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

const PosDiv = styled.div`
  flex: 20%;
  font-weight: bold;
  font-size: 25px;
`;

const ImgDiv = styled.div`
  flex: 50%;
`;
const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  display: block;
`;
export { AppDiv, OverlayDiv, OverlayP, PosDiv, ImgDiv, Img };
