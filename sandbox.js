const dbCollection = [
  { name: "a", xMin: 1, xMax: 5, yMin: 1, yMax: 8 },
  { name: "b", xMin: 2, xMax: 6, yMin: 2, yMax: 9 },
  { name: "c", xMin: 3, xMax: 8, yMin: 1, yMax: 8 },
  { name: "d", xMin: 4, xMax: 9, yMin: 1, yMax: 8 },
];

const clickedPos = [2, 3];

const checkAnswer = (userPick) => {
  const [clickedPosX, clickedPosY] = clickedPos;
  let dbMatch = ((userPick) =>
    dbCollection.filter((doc) => doc.name === userPick))(userPick)[0];

  const correctX = clickedPosX <= dbMatch.xMax && clickedPosX >= dbMatch.xMin;
  const correctY = clickedPosY <= dbMatch.yMax && clickedPosY >= dbMatch.yMin;

  if (correctX && correctY) {
    console.log("correct");
  } else {
    console.log("incorrect");
  }
};
checkAnswer("a");
