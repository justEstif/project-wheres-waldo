import { uid } from "uid";
import { SOptionsDiv } from "./Options.styled";
import { Option } from "../index";
import { Fragment } from "react";

const createOptions = (options, handleSubmit) => {
  const allOptions = options.map((el) => {
    return (
      <Fragment key={uid()}>
        <Option title={el.title} value={el.name} handleClick={handleSubmit} />
      </Fragment>
    );
  });
  return allOptions;
};
const Options = ({ handleSubmit, options, userName }) => {
  if (options[0] === "") {
    return (
      <form>
        <input type="text" name="userName" value={userName} />
        <button type="submit">submit score</button>
      </form>
    );
  }
  return <SOptionsDiv>{createOptions(options, handleSubmit)}</SOptionsDiv>;
};

export default Options;
