import { SOptionsContainerDiv } from "./OptionsContainer.styled";
import { Options } from "../index";

const OptionsContainer = ({ clickedPos, clicked, handleSubmit }) => {
  return (
    <SOptionsContainerDiv clicked={clicked} clickedPos={clickedPos}>
      <Options
        clickedPos={clickedPos}
        handleSubmit={handleSubmit}
        clicked={clicked}></Options>
    </SOptionsContainerDiv>
  );
};

export default OptionsContainer;
