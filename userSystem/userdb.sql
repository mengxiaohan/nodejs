/*
Navicat MySQL Data Transfer

Source Server         : local_mysql
Source Server Version : 50619
Source Host           : localhost:3306
Source Database       : userdb

Target Server Type    : MYSQL
Target Server Version : 50619
File Encoding         : 65001

Date: 2016-10-31 14:47:34
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_user
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `login_name` varchar(255) DEFAULT NULL COMMENT '登陆名',
  `login_pwd` varchar(255) DEFAULT NULL COMMENT '登陆密码',
  `username` varchar(255) DEFAULT NULL COMMENT '用户名',
  `description` varchar(255) DEFAULT NULL COMMENT '用户描述',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO `t_user` VALUES ('17', 'admin', 'admin', '管理员', '111');
INSERT INTO `t_user` VALUES ('18', '1', '2', '3', '4');
INSERT INTO `t_user` VALUES ('27', 'aa', '1', 'afds', 'a');
INSERT INTO `t_user` VALUES ('28', '8', '8', '8', '8');
