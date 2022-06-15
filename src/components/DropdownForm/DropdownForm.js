import styled from "styled-components";

const DropdownDiv = styled.div.attrs((props) => ({
  style: {
    display: props.display,
    left: props.clickedPos[0] + "px",
    top: props.clickedPos[1] + "px",
  },
}))`
  position: absolute;
  z-index: 2;
`;

const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: black;
  color: white;
  width: 150px;
  height: 150px;
  padding: 20px 40px;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

const ButtonSty = styled.button`
  font-family: "ubuntu mono", "Courier New", Courier, monospace;
  background-color: black;
  border: none;
  color: white;
  font-size: 16px;

  padding: 5px;
  text-align: center;

  // TODO change button style if correct
  // text-decoration: line-through;
  // pointer-events: none;

  &:hover {
    border-bottom: 1px solid red;
  }
`;

const DropdownForm = ({ clickedPos, clicked, handleSubmit, countries }) => {
  const display = clicked ? "block" : "none";
  return (
    <DropdownDiv display={display} clickedPos={clickedPos}>
      {/* //! change the form values*/}
      <ButtonsDiv>
        <ButtonSty value={"south-korea"} onClick={(e) => handleSubmit(e)}>
          South Korea
        </ButtonSty>
        <ButtonSty value={"algeria"} onClick={(e) => handleSubmit(e)}>
          Algeria
        </ButtonSty>
        <ButtonSty value={"greece"} onClick={(e) => handleSubmit(e)}>
          Greece
        </ButtonSty>
      </ButtonsDiv>
    </DropdownDiv>
  );
};

export default DropdownForm;
