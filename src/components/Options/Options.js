import { uid } from "uid";
import { SOptionsDiv } from "./Options.styled";
import { Option } from "../index";
import { Fragment, useEffect, useState } from "react";

const createOptions = (result, handleSubmit) => {
  const allOptions = result.map((res) => {
    return (
      <Fragment key={uid()}>
        <Option title={res.title} value={res.name} handleClick={handleSubmit} />
      </Fragment>
    );
  });
  return allOptions;
};
const Options = ({ handleSubmit, options }) => {
  const [result, setResult] = useState(options);
  useEffect(() => {
    setResult(options);
  }, [options]);
  return <SOptionsDiv>{createOptions(result, handleSubmit)}</SOptionsDiv>;
};

export default Options;
