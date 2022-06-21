import { SOverlayDiv } from "./Overlay.styled";
import { Pointer, OptionsContainer } from "../index";

const Overlay = ({
  clicked,
  cursorPos,
  clickedPos,
  handleMouseClick,
  handleOptionClick,
  options,
  userName,
  handleUserNameChange,
  handleUserNameSubmit,
}) => {
  return (
    <SOverlayDiv>
      <Pointer
        handleMouseClick={handleMouseClick}
        cursorPos={cursorPos}></Pointer>
      <OptionsContainer
        handleUserNameChange={handleUserNameChange}
        handleUserNameSubmit={handleUserNameSubmit}
        options={options}
        clickedPos={clickedPos}
        handleOptionClick={handleOptionClick}
        userName={userName}
        clicked={clicked}></OptionsContainer>
    </SOverlayDiv>
  );
};

export default Overlay;
