import { SOptionButton } from "./Option.styled";

const Option = ({ title, value, handleClick }) => {
  return (
    <SOptionButton value={value} onClick={handleClick}>
      {title}
    </SOptionButton>
  );
};

export default Option;
