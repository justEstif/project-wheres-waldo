import { SOverlayDiv } from "./Overlay.styled";
import { Pointer, OptionsContainer } from "../index";

const Overlay = ({
  clicked,
  cursorPos,
  clickedPos,
  handleClick,
  handleSubmit,
}) => {
  return (
    <SOverlayDiv>
      <Pointer handleClick={handleClick} cursorPos={cursorPos}></Pointer>
      <OptionsContainer
        clickedPos={clickedPos}
        handleSubmit={handleSubmit}
        clicked={clicked}></OptionsContainer>
    </SOverlayDiv>
  );
};

export default Overlay;
