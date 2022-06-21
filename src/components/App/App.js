import { Fragment, useState, useEffect } from "react";
import { db } from "../../firebase-config";

import {
  getDocs,
  collection,
  Timestamp,
  doc,
  setDoc,
} from "firebase/firestore";

import { GlobalStyle, SAppDiv } from "./App.styled";
import { rPlace } from "../../assets/index";
import { NavBar, Overlay, Image } from "../../components/index";
import { useNavigate } from "react-router-dom";

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

const getTimestamp = () => Timestamp.now();

const App = () => {
  const [clicked, setClicked] = useState(false);
  const [cursorPos, setCursorPos] = useState([]);
  const [clickedPos, setClickedPos] = useState([]);
  const [dbCollection, setDbCollection] = useState([]);
  const [options, setOptions] = useState([""]);
  const userDataRef = doc(collection(db, "users"));
  const [userData, setUserdata] = useState({
    userName: "",
    startTime: "",
    endTime: "",
  });

  useEffect(() => {
    getCollection().then((value) => {
      setDbCollection(value);
      setOptions(value);
      setUserdata((prev) => ({ ...prev, startTime: getTimestamp() }));
    });
  }, []);

  useEffect(() => {
    if (options.length === 0) {
      setUserdata((prev) => ({ ...prev, endTime: getTimestamp() }));
      setOptions([""]);
      setClicked(true);
    }
  }, [options]);

  const checkAnswer = (userPick) => {
    const [clickedPosX, clickedPosY] = clickedPos;
    let dbMatch = ((userPick) =>
      dbCollection.filter((doc) => doc.name === userPick))(userPick)[0];

    const matchingXPos =
      clickedPosX <= dbMatch.xMax && clickedPosX >= dbMatch.xMin;
    const matchingYPos =
      clickedPosY <= dbMatch.yMax && clickedPosY >= dbMatch.yMin;

    if (matchingXPos && matchingYPos) {
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
  const emptyUserData = () =>
    setUserdata({
      startTime: "",
      endTime: "",
      userName: "",
    });

  const isUserDataEmpty = () =>
    Object.values(userData).every((el) => el === "");

  const handleUserNameChange = (e) =>
    setUserdata((prev) => ({ ...prev, userName: e.target.value }));

  const handleUserNameSubmit = (e) => {
    const addDoc = async () => {
      if (!isUserDataEmpty()) await setDoc(userDataRef, userData);
    };

    e.preventDefault();
    addDoc();
    emptyUserData();
    setClicked(false);
    navigate("/score");
  };
  const navigate = useNavigate();
  return (
    <Fragment>
      <GlobalStyle />
      <SAppDiv>
        <NavBar />
        <Overlay
          clicked={clicked}
          cursorPos={cursorPos}
          handleMouseClick={handleMouseClick}
          clickedPos={clickedPos}
          handleOptionClick={handleOptionClick}
          options={options}
          userName={userData.userName}
          handleUserNameChange={handleUserNameChange}
          handleUserNameSubmit={handleUserNameSubmit}></Overlay>
        <Image handleMouseOver={handleMouseOver} imgSrc={rPlace} />
      </SAppDiv>
    </Fragment>
  );
};

export default App;
