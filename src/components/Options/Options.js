import { uid } from "uid";
import { SOptionsDiv } from "./Options.styled";
import { Option } from "../index";
import { Fragment } from "react";

const createOptions = (options, handleOptionClick) => {
  const allOptions = options.map((el) => {
    return (
      <Fragment key={uid()}>
        <Option
          title={el.title}
          value={el.name}
          handleOptionClick={handleOptionClick}
        />
      </Fragment>
    );
  });
  return allOptions;
};
const Options = ({
  handleOptionClick,
  options,
  userName,
  handleUserNameChange,
  handleUserNameSubmit,
}) => {
  if (options[0] === "") {
    return (
      <form onSubmit={handleUserNameSubmit}>
        <input
          type="text"
          name="userName"
          value={userName}
          onChange={(e) => handleUserNameChange(e)}
        />
      </form>
    );
  }
  return <SOptionsDiv>{createOptions(options, handleOptionClick)}</SOptionsDiv>;
};

export default Options;
