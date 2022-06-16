import { SOptionsDiv } from "./Options.styled";
import { Option } from "../index";

const Options = ({ clickedPos, clicked, handleSubmit }) => {
  return (
    <SOptionsDiv>
      <Option
        title={"South Korea"}
        value={"south-korea"}
        handleClick={handleSubmit}
      />
      <Option title={"Algeria"} value={"algeria"} handleClick={handleSubmit} />
      <Option title={"Greece"} value={"greece"} handleClick={handleSubmit} />
    </SOptionsDiv>
  );
};

export default Options;
