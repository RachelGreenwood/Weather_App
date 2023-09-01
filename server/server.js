const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 8000;

app.get("/api/weather", async (req, res) => {
    const city = req.query.city;
    console.log(city);
    const apiKey = "89fe2e5945f89e739118d5493ebb2f2c";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid=${apiKey}`;
    const response = await fetch(url);
    const weatherData = await response.json();
    res.json(weatherData);
    console.log(weatherData);
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})