const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server listening onn ${PORT}`);
})