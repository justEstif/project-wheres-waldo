import { uid } from "uid";
import { SOptionsDiv } from "./Options.styled";
import { Option } from "../index";
import { Fragment, useEffect, useState } from "react";

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
const Options = ({ handleSubmit, options }) => {
  if (options[0] === "") {
    return <div></div>;
  }
  return <SOptionsDiv>{createOptions(options, handleSubmit)}</SOptionsDiv>;
};

export default Options;
