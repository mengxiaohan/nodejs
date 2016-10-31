var express = require('express');
var router = express.Router();

/*
* 从此路径检测到post方式则进行post数据的处理操作
router.post('/', function(req, res, next) {
	console.info(next);
    res.writeHead(200, {'Content-Type': "text/plain"});
	res.write("success");
	res.end(); 
});
*/
router.route("/").get(function(req,res){
	if(req.query && req.query.out == "true"){
		delete req.session.sign;
	}
	res.render('login', { title: '用户管理系统_登陆' });
}).post(function(req, res) {
	var str = "fail";
	if(req.body.username == "admin" && req.body.password == "admin"){
		req.session.sign = true;
		str = "success";
	}
    res.writeHead(200, {'Content-Type': "text/plain"});
	res.write(str);
	res.end();
});

module.exports = router;
