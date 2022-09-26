const data = require("./data/data.json");
const defaultParamValue = [2, 3, 4, 5];

function fakeStarWarsName(nameParts) {
  let starWarsName = [];
  let copyData = JSON.parse(JSON.stringify(data));

  if (!defaultParamValue.includes(nameParts)) {
    console.log('Error. Params value should be a number from 2 to 5');
    return;
  }

  for (let i = 0; i < nameParts; i++) {
    const randomIndex = Math.floor(Math.random() * copyData.length);
    starWarsName.push(copyData.splice(randomIndex, 1)[0]);
  }
  return starWarsName.join(' ');
}

module.exports = {
  names: data,
  fakeStarWarsName: fakeStarWarsName
};
