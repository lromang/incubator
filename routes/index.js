var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET home page. */
router.get('/gf2', function(req, res, next) {
  res.render('gf2', { title: 'wordcloud' });
});


module.exports = router;
