import styled from "styled-components";
const DropdownDiv = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
`;

const FormDiv = styled.form`
  display: flex;
  flex-direction: column;
  background-color: black;
  height: 100px;
  margin: 20px;
  color: white;
`;

const Dropdown = ({ show }) => {
  return (
    <DropdownDiv show={show}>
      <FormDiv>
        <input type="radio" id="html" name="fav_language" value="HTML" />
        <label for="html">HTML</label>
        <input type="radio" id="css" name="fav_language" value="CSS" />
        <label for="css">CSS</label>
        <input
          type="radio"
          id="javascript"
          name="fav_language"
          value="JavaScript"
        />
        <label for="javascript">JavaScript</label>
      </FormDiv>
    </DropdownDiv>
  );
};

export default Dropdown;
