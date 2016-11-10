var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render("users/index", {title: "个人界面", user: {name:"管理员"}});
});

module.exports = router;
