import { Fragment, useState, useEffect } from "react";
import { db } from "../../firebase-config";
// read from the database
import { getDocs, collection } from "firebase/firestore";

import { GlobalStyle, SAppDiv } from "./App.styled";
import { rPlace } from "../../assets/index";
import { Header, Overlay, Image } from "../../components/index";

const getCoordinates = (e) => {
  const bnds = e.target.getBoundingClientRect();
  const x = e.clientX - bnds.left;
  const y = e.clientY - bnds.top;
  return [x, y];
};

// 
// maybe I could nest an async function inside of it
const getCountries = async () => {
  const countryCollectionRef = collection(db, "country-positions");
  const docs = await getDocs(countryCollectionRef);
  const countries = [];
  docs.forEach((doc) => {
    countries.push({
      name: doc.data()["name"],
      xMin: doc.data()["x-min"],
      xMax: doc.data()["x-max"],
      yMin: doc.data()["y-min"],
      yMax: doc.data()["y-max"],
    });
  });
  return countries;
};

const checkAnswer = (userPick, clickedPos, countries) => {
  for (const country of countries) {
    if (country.name === userPick) {
      const correctX =
        clickedPos[0] <= country.xMax && clickedPos[0] >= country.xMin;
      const correctY =
        clickedPos[1] <= country.yMax && clickedPos[1] >= country.yMin;
      if (correctX && correctY) {
        console.log("correct");
      } else {
        console.log("incorrect");
      }
      break;
    }
  }
};

const App = () => {
  const [clicked, setClicked] = useState(false);
  const [cursorPos, setCursorPos] = useState([]);
  const [clickedPos, setClickedPos] = useState([]);
  const [countries, setCountries] = useState([]);
  const [options, setOptions] = useState([]);

  // ! timer stuff
  const [seconds, setSeconds] = useState(0);
  const [activeTimer, setActiveTimer] = useState(false);

  const toggleTimer = () => setActiveTimer(!activeTimer);
  // const resetTimer = () => {
  //   setSeconds(0);
  //   setActiveTimer(false);
  // };
  useEffect(() => {
    let interval = null;
    if (activeTimer) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!activeTimer && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [activeTimer, seconds]);
  // ! timer stuff

  // ! db
  useEffect(() => {
    getCountries().then((value) => {
      setCountries(value);
      setOptions(value.map((el) => el.name));
    });
    // start timer after db loads
    toggleTimer();
  }, []);

  // ! db

  const handleClick = () => {
    setClickedPos(cursorPos);
    setClicked(!clicked);
  };

  const handleMouseOver = (e) => setCursorPos(getCoordinates(e));

  const handleSubmit = (e) => {
    e.preventDefault();
    checkAnswer(e.target.value, clickedPos, countries);
    setClicked(false);
    setCursorPos([]);
  };

  return (
    <Fragment>
      <GlobalStyle />
      <SAppDiv>
        <Header seconds={seconds}></Header>
        <Overlay
          clicked={clicked}
          cursorPos={cursorPos}
          handleClick={handleClick}
          clickedPos={clickedPos}
          handleSubmit={handleSubmit}
          options={options}></Overlay>
        <Image handleMouseOver={handleMouseOver} imgSrc={rPlace}></Image>
      </SAppDiv>
    </Fragment>
  );
};

export default App;
