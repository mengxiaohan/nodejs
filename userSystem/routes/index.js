var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	//req.session.sign = true; //测试
		
	/*判断当前是否有session 或者cookie， 检查用户是否已经登录 */
	if(req.session && req.session.sign){
		res.render("index", { title: '用户管理系统' });
	}else{
		res.redirect("/login");
	}
});

module.exports = router;
