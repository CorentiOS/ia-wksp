const express = require('express');

app = express();
const cors = require('cors');
require('dotenv').config();
app.set('view engine', 'ejs');
app.use(cors());

app.use('/api/', require('./routes/hello'));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Listening on Port : ${PORT}`);
})