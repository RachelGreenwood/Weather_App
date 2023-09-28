const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const db = require('./db/db-connection.js'); 

const app = express();
app.use(cors());

const PORT = process.env.PORT || 8000;

app.get("/api/weather", async (req, res) => {
    const city = req.query.city;
    const apiKey = process.env.apiKey;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(url);
    const weatherData = await response.json();
    res.json(weatherData);
});

app.get('/users', async (req, res) => {
    try{
        const { rows: users } = await db.query('SELECT * FROM users');
        console.log("Get in the server", users);
        res.send(users);

    } catch(error){
        console.log(error);
        return res.status(400).json({error});
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})