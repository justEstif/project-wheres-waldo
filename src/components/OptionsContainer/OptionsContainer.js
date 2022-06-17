import { SOptionsContainerDiv } from "./OptionsContainer.styled";
import { Options } from "../index";

const OptionsContainer = ({ clickedPos, clicked, handleSubmit, options }) => {
  return (
    <SOptionsContainerDiv clicked={clicked} clickedPos={clickedPos}>
      <Options options={options} handleSubmit={handleSubmit}></Options>
    </SOptionsContainerDiv>
  );
};

export default OptionsContainer;
