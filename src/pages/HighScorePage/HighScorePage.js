import { uid } from "uid";
import { Fragment } from "react";
import { useEffect, useState } from "react";
import { db } from "../../firebase-config";
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
  console.log(returnCollection);
  return returnCollection;
};

const createOptions = (userScore) => {
  const allOptions = userScore.map((user) => {
    console.log(user.endTime - user.startTime);
    return (
      <Fragment key={uid()}>
        <div>
          {user.userName}
          {Math.floor(user.endTime - user.startTime)}
        </div>
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
