const express = require('express');
const app = express();
const port = process.env.PORT;

app.get('/home', (req, res) =>{
    res.sendFile(path.resolve(__dirname, "home.html"));
})

app.listen(port, () => console.log('App running port 3000!'));