import { SOverlayDiv } from "./Overlay.styled";
import { Pointer, OptionsContainer } from "../index";

const Overlay = ({
  clicked,
  cursorPos,
  clickedPos,
  handleClick,
  handleSubmit,
  options,
  userName,
}) => {
  return (
    <SOverlayDiv>
      <Pointer handleClick={handleClick} cursorPos={cursorPos}></Pointer>
      <OptionsContainer
        options={options}
        clickedPos={clickedPos}
        handleSubmit={handleSubmit}
        userName={userName}
        clicked={clicked}></OptionsContainer>
    </SOverlayDiv>
  );
};

export default Overlay;
