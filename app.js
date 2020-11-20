const express = require('express');

const citiesRoutes = require('./routes/cities');
const app = express();
const cors = require('cors');
require('dotenv').config();
app.use(cors());

var fs = require('fs');

const cities = require('./json/montpellier.json');
const quartiers = require('./json/quartiers.json');

var monJson = JSON.parse(fs.readFileSync('./json/quartiers.json', 'utf8'));


app.get('/api', (req, res) => {
    res.status(200).json(cities)
})
app.get('/api/montpellier/:quartier', (req, res) => {
    const params = req.params.quartier;

    const quartier = monJson.montpellier.quartiers[`${params}`];

    res.status(200).json(quartier) 
})


app.use('/api', require('./routes/hello'));
app.use('/api/cities', citiesRoutes);


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Listening on Port : ${PORT}`);
})