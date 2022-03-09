const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const PORT = 3080 || process.env.PORT;
const helpers = require('./apiHelpers/movies.js');



app.use(express.static('client/dist'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



app.get('/movies', (req, res) => {
  helpers.getMovies()
  .then((movies) => {
    console.log('received movies at server')
    res.send(movies.data)
  })
  .catch((err) => res.status(404).json({ error: err }))
})






app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})