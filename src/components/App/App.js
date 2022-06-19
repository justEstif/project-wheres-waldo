import { Fragment, useState, useEffect } from "react";
import { db } from "../../firebase-config";

// read from the database
import {
  getDocs,
  collection,
  Timestamp,
  setDoc,
  doc,
} from "firebase/firestore";

import { GlobalStyle, SAppDiv } from "./App.styled";
import { rPlace } from "../../assets/index";
import { Overlay, Image } from "../../components/index";

const getCoordinates = (e) => {
  const bnds = e.target.getBoundingClientRect();
  const x = e.clientX - bnds.left;
  const y = e.clientY - bnds.top;
  return [x, y];
};

// ! snapshot db
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

const App = () => {
  const [clicked, setClicked] = useState(false);
  const [cursorPos, setCursorPos] = useState([]);
  const [clickedPos, setClickedPos] = useState([]);
  const [dbCollection, setDbCollection] = useState([]);
  const [options, setOptions] = useState([""]);

  const [missingCount, setMissingCount] = useState();
  const [userData, setUserData] = useState({
    name: "",
    startTime: "",
    endTime: "",
  });

  const userRef = doc(collection(db, "users"));
  const addToDoc = async () => await setDoc(userRef, userData);
  // console.log(userRef.id);
  console.log("objechellot");

  //
  useEffect(() => {
    getCollection().then((value) => {
      setDbCollection(value);
      setOptions(value);
      setUserData((prevState) => ({
        ...prevState,
        startTime: Timestamp.now(),
      }));
      setMissingCount(options.length);
    });
  }, []);

  // ! set the end time
  useEffect(() => {
    if (missingCount === 0) {
      setUserData((prevState) => ({
        ...prevState,
        endTime: Timestamp.now(),
      }));

      addToDoc();
    }
  }, [missingCount]);

  const checkAnswer = (userPick) => {
    let match = ((userPick) =>
      dbCollection.filter((country) => country.name === userPick))(userPick);

    const correctX =
      clickedPos[0] <= match[0].xMax && clickedPos[0] >= match[0].xMin;
    const correctY =
      clickedPos[1] <= match[0].yMax && clickedPos[1] >= match[0].yMin;

    if (correctX && correctY) {
      setOptions(options.filter((el) => el.name !== userPick));
      setMissingCount((curr) => curr - 1);
    } else {
      console.log("incorrect");
    }
  };

  const handleClick = () => {
    setClickedPos(cursorPos);
    setClicked(!clicked);
  };

  const handleMouseOver = (e) => setCursorPos(getCoordinates(e));

  const handleSubmit = (e) => {
    checkAnswer(e.target.value);
    setClicked(false);
    setCursorPos([]);
  };

  return (
    <Fragment>
      <GlobalStyle />
      <SAppDiv>
        <Overlay
          clicked={clicked}
          cursorPos={cursorPos}
          handleClick={handleClick}
          clickedPos={clickedPos}
          handleSubmit={handleSubmit}
          options={options}></Overlay>
        <Image handleMouseOver={handleMouseOver} imgSrc={rPlace} />
      </SAppDiv>
    </Fragment>
  );
};;;;;;;;;;;;;;;;;;;;;;;;;

export default App;
