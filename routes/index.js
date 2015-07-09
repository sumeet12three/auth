var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title:{main: 'Sumeet',sub: "Express" }});
});

module.exports = router;
