import { SOptionsContainerDiv } from "./OptionsContainer.styled";
import { Options } from "../index";

const OptionsContainer = ({ clickedPos, clicked, handleSubmit }) => {
  return (
    <SOptionsContainerDiv clicked={clicked} clickedPos={clickedPos}>
      <Options handleSubmit={handleSubmit}></Options>
    </SOptionsContainerDiv>
  );
};

export default OptionsContainer;
