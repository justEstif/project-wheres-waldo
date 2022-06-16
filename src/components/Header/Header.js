import { SHeaderDiv } from "./Header.styled";
import { Timer } from "../index";
const Header = ({ countries }) => {
  return (
    <SHeaderDiv>
      <div>Header</div>
      <Timer />
    </SHeaderDiv>
  );
};

export default Header;
