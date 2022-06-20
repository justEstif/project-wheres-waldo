import { SOptionButton } from "./Option.styled";

const Option = ({ title, value, handleOptionClick }) => {
  return (
    <SOptionButton value={value} onClick={handleOptionClick}>
      {title}
    </SOptionButton>
  );
};

export default Option;
