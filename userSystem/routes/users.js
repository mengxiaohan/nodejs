var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var conf = require('../db/config');
var sql = require('../db/userSqlMapping');

// 使用连接池，提升性能
var pool = mysql.createPool(conf.mysql);

// 向前台返回JSON方法的简单封装
var jsonWrite = function (err, res, result) {
	if(typeof result === 'undefined') {
		console.error(err);
		res.json({
			code: '1',
			msg: '操作失败'
		});
	} else {
		//var arr = JSON.parse(result);
		res.render('users/index', {user : result});
	}
};

/* GET users listing. */
router.get('/list', function(req, res, next) {
	pool.getConnection(function(err, connection) {
		connection.query(sql.queryAll, function(err, result) {
			jsonWrite(err, res, result);
			connection.release(); // 释放连接 
		});
	});
		
	//res.send('respond with list resource');
});

router.get('/add', function(req, res, next) {
	res.render('users/edit', {user: {}}); //这里用一个空的user对象
});

router.post('/save', function(req, res, next) {
	pool.getConnection(function(err, connection) {
		// 获取前台页面传过来的参数
		var param = req.body;
		// 建立连接，向表中插入值
		connection.query(sql.insert, [param.login_name, param.login_pwd, param.username, param.description], function(err, result) {
			console.info(err, result);
			connection.release(); // 释放连接 
		});
	});
		
	//res.render('users/list');
	res.redirect("/");
});

router.get('/edit', function(req, res, next) {
	var id = +req.query.id; // 为了拼凑正确的sql语句，这里要转下整数
	pool.getConnection(function(err, connection) {
		connection.query(sql.queryById, id, function(err, result) {
			// result is RowDataPacket
			res.render('users/edit', {user: result[0]});
			connection.release();
		});
	});
});


router.get('/delete', function(req, res, next) {
	var id = +req.query.id; // 为了拼凑正确的sql语句，这里要转下整数
	pool.getConnection(function(err, connection) {
		connection.query(sql.delete, id, function(err, result) {
			console.info(err, result);
			connection.release();
		});
	});
	res.redirect("/users/list");
});

module.exports = router;
