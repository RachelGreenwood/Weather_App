const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 8000;

app.get("/api/weather", (req, res) => {
    
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
    console.log(`Server listening on ${PORT}`);
})