const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/routines.json');

// GET all routines
exports.getRoutines = (req, res) => {
  const data = fs.readFileSync(dataPath);
  const routines = JSON.parse(data);
  res.json(routines);
};

// POST new routine
exports.addRoutine = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  const data = fs.readFileSync(dataPath);
  const routines = JSON.parse(data);

  const newRoutine = {
    id: Date.now(),
    name,
  };

  routines.push(newRoutine);
  fs.writeFileSync(dataPath, JSON.stringify(routines, null, 2));

  res.status(201).json(newRoutine);
};
