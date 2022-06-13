import styled from "styled-components";
const DropdownDiv = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
`;

const Dropdown = ({ show }) => {
  return (
    <DropdownDiv show={show}>
      <div>In dropdown</div>
    </DropdownDiv>
  );
};

export default Dropdown;
