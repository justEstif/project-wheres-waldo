import { uid } from "uid";
import { Fragment } from "react";
import { useEffect, useState } from "react";
import { db } from "../../firebase-config";
import { SUserScoreDiv } from "./HighScore.styled";
import { getDocs, collection, doc } from "firebase/firestore";

const getCollection = async () => {
  const collectionRef = collection(db, "users");
  const docs = await getDocs(collectionRef);
  const returnCollection = [];
  docs.forEach((doc) => {
    returnCollection.push({
      userName: doc.data()["userName"],
      startTime: doc.data()["startTime"],
      endTime: doc.data()["endTime"],
    });
  });
  return returnCollection;
};

const createOptions = (userScore) => {
  const allOptions = userScore.map((user) => {
    return (
      <Fragment key={uid()}>
        <SUserScoreDiv>
          <div>{user.userName}</div>
          <div>{Math.floor(user.endTime - user.startTime)}seconds</div>
        </SUserScoreDiv>
      </Fragment>
    );
  });
  return allOptions;
};
const HighScorePage = () => {
  const [userScore, setUserScore] = useState([]);

  useEffect(() => {
    getCollection().then((value) => {
      setUserScore(value);
    });
  }, []);

  return (
    <div>
      <h1>Hello world</h1>

      {createOptions(userScore)}
    </div>
  );
};

export default HighScorePage;
