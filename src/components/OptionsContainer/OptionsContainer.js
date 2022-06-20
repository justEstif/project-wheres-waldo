import { SOptionsContainerDiv } from "./OptionsContainer.styled";
import { Options } from "../index";

const OptionsContainer = ({
  clickedPos,
  clicked,
  handleSubmit,
  options,
  userName,
}) => {
  return (
    <SOptionsContainerDiv clicked={clicked} clickedPos={clickedPos}>
      <Options
        options={options}
        handleSubmit={handleSubmit}
        userName={userName}></Options>
    </SOptionsContainerDiv>
  );
};

export default OptionsContainer;
