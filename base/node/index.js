import express from 'express';
import calc from './calc'

const app = express();
const PORT = 3000;
const aNumber = calc();

app.get('/', (req, res) =>
    res.send(`showing number ${aNumber}`)
);

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);ç