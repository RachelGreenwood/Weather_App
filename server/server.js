import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
app.use(cors());

const PORT = process.env.PORT || 8000;

app.get("/api/weather", async (req, res) => {
    const city = req.query.city;
    const apiKey = process.env.apiKey;
    console.log(city);
    console.log(apiKey);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(url);
    const weatherData = await response.json();
    res.json(weatherData);
    console.log(weatherData);
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})