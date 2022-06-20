import { SOptionsContainerDiv } from "./OptionsContainer.styled";
import { Options } from "../index";

const OptionsContainer = ({
  clickedPos,
  clicked,
  handleOptionClick,
  options,
  userName,
  handleUserNameChange,
  handleUserNameSubmit,
}) => {
  return (
    <SOptionsContainerDiv clicked={clicked} clickedPos={clickedPos}>
      <Options
        options={options}
        handleUserNameChange={handleUserNameChange}
      handleUserNameSubmit={handleUserNameSubmit}
        handleOptionClick={handleOptionClick}
        userName={userName}></Options>
    </SOptionsContainerDiv>
  );
};

export default OptionsContainer;
