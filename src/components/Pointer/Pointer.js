import { SPointerDiv } from "./Pointer.styled";

const Pointer = ({ cursorPos, handleMouseClick }) => {
  return (
    <SPointerDiv
      onClick={(e) => handleMouseClick(e)}
      cursorPos={cursorPos}></SPointerDiv>
  );
};

export default Pointer;
