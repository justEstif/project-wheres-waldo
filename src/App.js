// react
import { useState } from "react";
// styling
import "normalize.css";
// assets
import {
  AppDiv,
  OverlayDiv,
  OverlayP,
  OverlayToggleBtn,
} from "./components/StyledComponets";

const App = (props) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <AppDiv>
      <OverlayToggleBtn onClick={() => handleClick()}>
        Turn Overlay:{click ? "off" : "on"}
      </OverlayToggleBtn>
      <OverlayDiv click={click}>
        <OverlayP>Overlay</OverlayP>
      </OverlayDiv>
    </AppDiv>
  );
};

export default App;
