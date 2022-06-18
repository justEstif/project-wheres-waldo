import { SPointerDiv } from "./Pointer.styled";

const Pointer = ({ cursorPos, handleClick }) => {
  return (
    <SPointerDiv
      onClick={(e) => handleClick(e)}
      cursorPos={cursorPos}></SPointerDiv>
  );
};

export default Pointer;
