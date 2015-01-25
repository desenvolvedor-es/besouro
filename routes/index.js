var menu = require('../controllers/menu.js');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	res.render('index', {
		title: 'Besouro',
		menu: menu
	});
});

module.exports = router;
