import { Fragment, useState, useEffect } from "react";
import { db } from "../../firebase-config";

// read from the database
import { getDocs, collection } from "firebase/firestore";

import { GlobalStyle, SAppDiv } from "./App.styled";
import { rPlace } from "../../assets/index";
import { Overlay, Image } from "../../components/index";

const getCoordinates = (e) => {
  const bnds = e.target.getBoundingClientRect();
  const x = e.clientX - bnds.left;
  const y = e.clientY - bnds.top;
  return [x, y];
};

const getCollection = async () => {
  const collectionRef = collection(db, "country-positions");
  const docs = await getDocs(collectionRef);
  const returnCollection = [];
  docs.forEach((doc) => {
    returnCollection.push({
      name: doc.data()["name"],
      title: doc.data()["title"],
      xMin: doc.data()["x-min"],
      xMax: doc.data()["x-max"],
      yMin: doc.data()["y-min"],
      yMax: doc.data()["y-max"],
    });
  });
  return returnCollection;
};

const App = () => {
  const [clicked, setClicked] = useState(false);
  const [cursorPos, setCursorPos] = useState([]);
  const [clickedPos, setClickedPos] = useState([]);
  const [collection, setCollection] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    getCollection().then((value) => {
      setCollection(value);
      setOptions(value);
    });
  }, []);

  const checkAnswer = (userPick) => {
    const match = ((userPick) =>
      collection.filter((country) => country.name === userPick))(userPick);
    if (!match) return;
    const correctX =
      clickedPos[0] <= match[0].xMax && clickedPos[0] >= match[0].xMin;
    const correctY =
      clickedPos[1] <= match[0].yMax && clickedPos[1] >= match[0].yMin;
    if (correctX && correctY)
      setOptions(options.filter((el) => el.name !== userPick));
    else console.log("incorrect");
  };

  const handleClick = () => {
    setClickedPos(cursorPos);
    setClicked(!clicked);
  };

  const handleMouseOver = (e) => setCursorPos(getCoordinates(e));

  const handleSubmit = (e) => {
    e.preventDefault();
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
};

export default App;
