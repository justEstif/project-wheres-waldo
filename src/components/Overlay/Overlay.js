import styled from "styled-components";
import { Pointer, DropdownForm } from "../index";

const OverlayDiv = styled.div`
  position: absolute;
  transform: translate3d(-50%, -50%, 0);
  left: ${(props) => props.position[0] + "px"};
  top: ${(props) => props.position[1] + "px"};
  > * {
    position: absolute;
    z-index: 2;
  }
`;

const Overlay = ({ position }) => {
  return (
    <OverlayDiv position={position}>
      <Pointer position={position}></Pointer>
      <DropdownForm show={true}></DropdownForm>
    </OverlayDiv>
  );
};

export default Overlay;
