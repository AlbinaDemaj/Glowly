const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const routineRoutes = require('./routes/routineRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h2>Skincare Backend is running 🧴</h2>');
});

app.use('/api/routines', routineRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
