import { SHeaderDiv } from "./Header.styled";
import { Timer } from "../index";
const Header = ({ seconds }) => {
  return (
    <SHeaderDiv>
      <div>Header</div>
      <div>{seconds}</div>

      {/* <Timer /> */}
    </SHeaderDiv>
  );
};

export default Header;
