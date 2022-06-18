const countries = [
  { name: "a", xMin: 1, xMax: 5, yMin: 1, yMax: 8 },
  { name: "b", xMin: 2, xMax: 6, yMin: 2, yMax: 9 },
  { name: "c", xMin: 3, xMax: 8, yMin: 1, yMax: 8 },
  { name: "d", xMin: 4, xMax: 9, yMin: 1, yMax: 8 },
];

const clickedPos = [2, 3];

const checkAnswer = (userPick) => {
  const match = ((userPick) =>
    countries.filter((country) => country.name === userPick))(userPick);
  if (!match) return;
  const correctX =
    clickedPos[0] <= match[0].xMax && clickedPos[0] >= match[0].xMin;
  const correctY =
    clickedPos[1] <= match[0].yMax && clickedPos[1] >= match[0].yMin;
  if (correctX && correctY) console.log("correct");
};

checkAnswer("a");
