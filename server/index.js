// server/index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const locationsRouter = require('./routes/locations');
const eventsRouter = require('./routes/events');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/locations', locationsRouter);
app.use('/api/events', eventsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));