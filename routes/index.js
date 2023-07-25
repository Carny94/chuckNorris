var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
 const response = await fetch('https://api.chucknorris.io/jokes/random')
 const joke = await response.json()
 const jokeValue = joke.value
 console.log(joke.value);

  res.render('index', { jokeValue });
});

module.exports = router;
