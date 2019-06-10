//https://warm-waters-16265.herokuapp.com/ | 
//https://git.heroku.com/warm-waters-16265.git

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send({hi: 'there my man'});
})

const PORT = process.env.PORT || 5000
app.listen(PORT);