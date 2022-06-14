import { Fragment, useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { rPlace } from "./assets";
import { db } from "./firebase-config";
import { Header, Overlay, Image } from "./components/index";
import { getDocs, collection } from "firebase/firestore";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {
    min-height: 100vh;
    padding: 0;
    margin: 0;
  }
  ::-webkit-scrollbar { 
    display: none;
  }
`;

const AppDiv = styled.div`
  font-family: "ubuntu mono", "Courier New", Courier, monospace;
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;

  display: flex;
  flex-direction: column;
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const getCoordinates = (e) => {
  const bnds = e.target.getBoundingClientRect();
  const x = e.clientX - bnds.left;
  const y = e.clientY - bnds.top;
  return [x, y];
};

const getCountries = async () => {
  const countryCollectionRef = collection(db, "country-positions");
  const docs = await getDocs(countryCollectionRef);
  const countries = [];
  docs.forEach((doc) => {
    countries.push({
      id: doc.id,
      name: doc.data()["name"],
      xMin: doc.data()["x-min"],
      xMax: doc.data()["x-max"],
      yMin: doc.data()["y-min"],
      yMax: doc.data()["y-max"],
    });
  });
  return countries;
};

const App = () => {
  const [clicked, setClicked] = useState(false);
  const [cursorPos, setCursorPos] = useState([]);
  const [clickedPos, setClickedPos] = useState([]);

  // ! database stuff
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    setCountries(getCountries());
  }, []);
  // ! database stuff

  const handleClick = () => {
    setClickedPos(cursorPos);
    setClicked(!clicked);
  };

  const handleMouseOver = (e) => setCursorPos(getCoordinates(e));

  const handleSubmit = (e) => {
    console.log("submit"); // ! remove later
    getCountries();
    setClicked(false);
  };

  return (
    <Fragment>
      <GlobalStyle />
      <AppDiv>
        <Header></Header>
        <Overlay
          clicked={clicked}
          cursorPos={cursorPos}
          handleClick={handleClick}
          clickedPos={clickedPos}
          handleSubmit={handleSubmit}
        ></Overlay>
        <Image handleMouseOver={handleMouseOver} imgSrc={rPlace}></Image>
      </AppDiv>
    </Fragment>
  );
};

export default App;
