import { Fragment, useState, useEffect } from "react";
import { db } from "../../firebase-config";

// read from the database
import { getDocs, collection, serverTimestamp } from "firebase/firestore";

import { GlobalStyle, SAppDiv } from "./App.styled";
import { rPlace } from "../../assets/index";
import { Header, Overlay, Image } from "../../components/index";

const getCoordinates = (e) => {
  const bnds = e.target.getBoundingClientRect();
  const x = e.clientX - bnds.left;
  const y = e.clientY - bnds.top;
  return [x, y];
};

const getCollection = async () => {
  const countryCollectionRef = collection(db, "country-positions");
  const docs = await getDocs(countryCollectionRef);
  const value = [];
  docs.forEach((doc) => {
    value.push({
      name: doc.data()["name"],
      title: doc.data()["title"],
      xMin: doc.data()["x-min"],
      xMax: doc.data()["x-max"],
      yMin: doc.data()["y-min"],
      yMax: doc.data()["y-max"],
    });
  });
  return value;
};

const App = () => {
  const [clicked, setClicked] = useState(false);
  const [cursorPos, setCursorPos] = useState([]);
  const [clickedPos, setClickedPos] = useState([]);
  const [countries, setCountries] = useState([]);
  const [options, setOptions] = useState([]);

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
    } else if ((!activeTimer && seconds !== 0) || options.length === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [activeTimer, seconds, options]);
  // ! timer stuff

  // ! db
  useEffect(() => {
    getCollection().then((value) => {
      setCountries(value);
      setOptions(value);
    });
    // start timer after db loads
    toggleTimer();
  }, []);

  // ! db

  const checkAnswer = (userPick, clickedPos, countries) => {
    for (const country of countries) {
      if (country.name === userPick) {
        const correctX =
          clickedPos[0] <= country.xMax && clickedPos[0] >= country.xMin;
        const correctY =
          clickedPos[1] <= country.yMax && clickedPos[1] >= country.yMin;
        if (correctX && correctY) {
          setOptions(options.filter((el) => el.name !== userPick));
        } else {
          console.log("incorrect");
        }
        break;
      }
    }
  };

  const handleClick = () => {
    setClickedPos(cursorPos);
    setClicked(!clicked);
    console.log(options);
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
