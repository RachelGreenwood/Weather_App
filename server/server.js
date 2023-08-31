const express = require('express');
import "dotenv/config";
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 8000;

app.get("/api", (req, res) => {
    console.log(req.query);
    const city = req.query.city;
    const apiKey = process.env.API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    console.log(url);
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            res.send({data});
        })
        .catch((err) => {
            console.log(err);
        });
});

app.listen(PORT, () => {
    console.log(`Server listening onn ${PORT}`);
})