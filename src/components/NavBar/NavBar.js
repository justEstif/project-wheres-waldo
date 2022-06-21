import { Link } from "react-router-dom";
import { SNavBarDiv, SNavBarUl, SNavBarLi } from "./NavBar.styled";
const NavBar = () => {
  return (
    <SNavBarDiv>
      <SNavBarUl>
        <SNavBarLi>
          <Link to="/">Home</Link>
        </SNavBarLi>
        <SNavBarLi>
          <Link to="/score">Scores</Link>
        </SNavBarLi>
      </SNavBarUl>
    </SNavBarDiv>
  );
};

export default NavBar;
