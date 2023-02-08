drop database if exists dsv;
create database dsv CHARACTER SET utf8;

use dsv;

create table user (
	account varchar(20) primary key,
	pwd varchar(50),
	username varchar(20),
	img text,
	token varchar(100)
);

create table project (
	id int primary key auto_increment,
	projectName varchar(20),
	account varchar(20),
	content text,
	createTime long,
	modifyTime long,
	permission int -- 0 私有，1 公开
) auto_increment=10001;

create table video (
	id int primary key auto_increment,
	videoName varchar(20),
	account varchar(20),
	content text,
	createTime long,
	permission int -- 0 私有，2 公开
) auto_increment=10001;

create table algorithm (
	id int primary key auto_increment,
	algorithmName varchar(20),
	account varchar(20),
	content text,
	createTime long,
	modifyTime long,
	permission int -- 0 私有，1 可使用，2 可阅读
) auto_increment=10001;