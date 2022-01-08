import express from 'express';
import cors from 'cors';
import fetch from "node-fetch";

const app = express();

globalThis.fetch = fetch;

app.use(cors());

app.get('/get', async (req, res) => {

    const response = await fetch("http://alpha-meme-maker.herokuapp.com/1", {
        mode: 'cors'
    });

    const data = await response.json();

    console.log("data", data)

    res.send(data);
});

app.listen(3001, () => {
    console.log("alive on port", 3001)
})