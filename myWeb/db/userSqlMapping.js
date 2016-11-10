var user = {
	insert: 'INSERT INTO t_user(login_name, login_pwd, username, description) VALUES (?, ?, ?, ?)',
	update: 'update t_user set name=?, age =? where id= ?',
	delete: 'delete from t_user where id = ?',
	queryById: 'select * from t_user where id = ?',
	queryAll: 'select * from t_user'
};

module.exports = user;