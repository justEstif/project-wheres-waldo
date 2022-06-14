import styled from "styled-components";
import { Pointer, DropdownForm } from "../index";
const OverlayDiv = styled.div`
  position: absolute;
  z-index: 2;
`;

const Overlay = ({
  clicked,
  cursorPos,
  clickedPos,
  handleClick,
  handleSubmit,
}) => {
  return (
    <OverlayDiv>
      <Pointer handleClick={handleClick} cursorPos={cursorPos}></Pointer>
      <DropdownForm
        clickedPos={clickedPos}
        handleSubmit={handleSubmit}
        clicked={clicked}
      ></DropdownForm>
    </OverlayDiv>
  );
};

export default Overlay;

