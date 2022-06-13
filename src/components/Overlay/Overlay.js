import styled from "styled-components";
import { Dropdown } from "../index";

const OverlayDiv = styled.div`
  display: ${(props) => (props.position ? "block" : "none")};
  position: absolute;
  z-index: 2;
  /* border: 2px solid red; */
  border-radius: 50%;
  background-color: black;
  /* background-color: rgba(255, 255, 255, 0.5); */
  width: 20px;
  height: 20px;
  /* border-radius: 50%; */
  transform: translate3d(-50%, -50%, 0);
  left: ${(props) => props.position[0] + "px"};
  top: ${(props) => props.position[1] + "px"};

  text-align: center;
`;

const Overlay = ({ position }) => {
  return (
    <OverlayDiv position={position}>
      <Dropdown></Dropdown>
      {/* <div>x: {position[0]}</div>
      <div>y: {position[1]}</div> */}
    </OverlayDiv>
  );
};

export default Overlay;
