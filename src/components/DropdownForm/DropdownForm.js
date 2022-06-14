import styled from "styled-components";
const DropdownDiv = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
`;

const FormDiv = styled.form`
  /* display: flex; */
  /* flex-direction: column; */

  /* background-color: black; */
  /* height: 100px; */
  /*  width: 100%; */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: black;
  color: white;
  width: 180px;
`;

const DropdownForm = ({ show }) => {
  return (
    <DropdownDiv show={show}>
      <FormDiv>
        <p>
          <input type="radio" id="html" name="fav_language" value="HTML" />
          <label htmlFor="html">HTML</label>
        </p>
        <p>
          <input type="radio" id="css" name="fav_language" value="CSS" />
          <label htmlFor="css">CSS</label>
        </p>
        <p>
          <input
            type="radio"
            id="javascript"
            name="fav_language"
            value="JavaScript"
          />
          <label htmlFor="javascript">JavaScript</label>
        </p>
      </FormDiv>
    </DropdownDiv>
  );
};

export default DropdownForm;
