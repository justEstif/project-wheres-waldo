import styled from "styled-components";

const OverlayDiv = styled.div`
  display: ${(props) => (props.position ? "block" : "none")};
  position: absolute;
  z-index: 2;
  border: 4px solid red;
  background-color: rgba(255, 255, 255, 0.5);
  width: 85px;
  height: 85px;
  border-radius: 50%;
  transform: translate3d(-50%, -50%, 0);
  left: ${(props) => props.position[0] + "px"};
  top: ${(props) => props.position[1] + "px"};
`;

const Overlay = ({ position }) => {
  return <OverlayDiv position={position}></OverlayDiv>;
};

export default Overlay;
