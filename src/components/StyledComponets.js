import styled from "styled-components";
import { waldoImg } from "../assets/index";

const AppDiv = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap");
  display: flex;
  flex-direction: column;
  font-family: "ubuntu mono", "Courier New", Courier, monospace;
  text-align: center;
`;

const OverlayDiv = styled.div`
  display: ${(props) => (props.position ? "block" : "none")};
  position: absolute;
  z-index: 2;
  border: 4px solid red;
  background-color: rgba(255, 255, 255, 0.5);
  width: 85px;
  height: 85px;
  border-radius: 50%;
  transform: translate3d(-50%, -50%, 0);
  left: ${(props) => props.position[0] + "px"};
  top: ${(props) => props.position[1] + "px"};
`;

const PosDiv = styled.div`
  flex: 20%;
  font-weight: bold;
  font-size: 25px;
`;

const ImgDiv = styled.div`
  height: 100vh;
  width: 100vw;
  background: url(${waldoImg}) no-repeat center center fixed;
  background-size: cover;
`;

export { AppDiv, OverlayDiv, PosDiv, ImgDiv };
