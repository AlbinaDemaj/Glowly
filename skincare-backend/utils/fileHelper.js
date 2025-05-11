const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data', 'routines.json');

const readData = () => {
  const jsonData = fs.readFileSync(dataPath);
  return JSON.parse(jsonData);
};

const writeData = (data) => {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
};

module.exports = {
  readData,
  writeData,
};
