import { Fragment, useState, useEffect } from "react";
import { db } from "../../firebase-config";

import {
  getDocs,
  collection,
  Timestamp,
  setDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

import { GlobalStyle, SAppDiv } from "./App.styled";
import { rPlace } from "../../assets/index";
import { Header, Overlay, Image } from "../../components/index";

const getCoordinates = (e) => {
  const bound = e.target.getBoundingClientRect();
  const x = e.clientX - bound.left;
  const y = e.clientY - bound.top;
  return [x, y];
};

const getCollection = async () => {
  const collectionRef = collection(db, "flags");
  const docs = await getDocs(collectionRef);
  const returnCollection = [];
  docs.forEach((doc) => {
    returnCollection.push({
      name: doc.data()["name"],
      title: doc.data()["title"],
      xMin: doc.data()["xMin"],
      xMax: doc.data()["xMax"],
      yMin: doc.data()["yMin"],
      yMax: doc.data()["yMax"],
    });
  });
  return returnCollection;
};

// const getTime = () => Date.now()
const getTimestamp = () => Timestamp.now();

const App = () => {
  const [clicked, setClicked] = useState(false);
  const [cursorPos, setCursorPos] = useState([]);
  const [clickedPos, setClickedPos] = useState([]);
  const [dbCollection, setDbCollection] = useState([]);
  const [options, setOptions] = useState([""]);
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [userName, setUserName] = useState("");
  const userDataRef = doc(collection(db, "users"));

  useEffect(() => {
    getCollection().then((value) => {
      setDbCollection(value);
      setOptions(value);
      setStartTime(getTimestamp());
    });
  }, []);

  const addToDoc = async (userData) => await setDoc(userDataRef, userData);
  const addUserNameToDoc = async (userName) =>
    await updateDoc(userDataRef, userName);
  useEffect(() => {
    if (options.length === 0) {
      setEndTime(getTimestamp());

      if (endTime) {
        try {
          addToDoc({ startTime, endTime });
        } catch (e) {
          console.log(e);
        }
      }

      return () => {
        setOptions([""]);
        setStartTime();
        setEndTime();
      };
    }
  }, [options.length, startTime, endTime, userDataRef, addToDoc]);

  const checkAnswer = (userPick) => {
    const [clickedPosX, clickedPosY] = clickedPos;
    let dbMatch = ((userPick) =>
      dbCollection.filter((doc) => doc.name === userPick))(userPick)[0];

    const correctX = clickedPosX <= dbMatch.xMax && clickedPosX >= dbMatch.xMin;
    const correctY = clickedPosY <= dbMatch.yMax && clickedPosY >= dbMatch.yMin;

    if (correctX && correctY) {
      setOptions(options.filter((el) => el.name !== userPick));
      console.log("correct");
    } else {
      console.log("incorrect");
    }
  };

  const handleMouseClick = () => {
    setClickedPos(cursorPos);
    setClicked(!clicked);
  };

  const handleMouseOver = (e) => setCursorPos(getCoordinates(e));

  const handleOptionClick = (e) => {
    checkAnswer(e.target.value);
    setClicked(false);
    setCursorPos([]);
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleUserNameSubmit = (e) => {
    e.preventDefault();
    addUserNameToDoc({ userName });
    setUserName("");
    // move to the next page
  };
  return (
    <Fragment>
      <GlobalStyle />
      <SAppDiv>
        <Header />
        <Overlay
          handleUserNameChange={handleUserNameChange}
          handleUserNameSubmit={handleUserNameSubmit}
          clicked={clicked}
          cursorPos={cursorPos}
          handleMouseClick={handleMouseClick}
          clickedPos={clickedPos}
          handleOptionClick={handleOptionClick}
          userName={userName}
          options={options}></Overlay>
        <Image handleMouseOver={handleMouseOver} imgSrc={rPlace} />
      </SAppDiv>
    </Fragment>
  );
};

export default App;
