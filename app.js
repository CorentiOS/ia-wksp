const express = require('express');

const carsRoutes = require('./routes/cars');
app = express();
const cors = require('cors');
require('dotenv').config();
app.set('view engine', 'ejs');
app.use(cors());

app.use('/api', require('./routes/hello'));
app.use('/api/cars', carsRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Listening on Port : ${PORT}`);
})