import styled from "styled-components";

const PointerDiv = styled.div`
  display: ${(props) => (props.position ? "block" : "none")};
  /* border: 2px solid red; */
  border-radius: 50%;
  background-color: black;
  /* background-color: rgba(255, 255, 255, 0.5); */
  width: 20px;
  height: 20px;
  /* border-radius: 50%; */
  /* transform: translate3d(-50%, -50%, 0);
  left: ${(props) => props.position[0] + "px"};
  top: ${(props) => props.position[1] + "px"}; */
`;

const Pointer = ({ position }) => {
  return <PointerDiv position={position}></PointerDiv>;
};

export default Pointer;
