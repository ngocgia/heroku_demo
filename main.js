const express = require('express');
const app = express();
// const port = process.env.PORT; // cấu hình heroku
const port = 3000;
const path = require("path");

app.use(express.static('pages'))


app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, 'pages/index.html')));

app.listen(port, () => console.log('App running port 3000!'));