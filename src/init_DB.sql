SHOW DATABASES;
DROP DATABASE IF EXISTS authentication_apis_db;
CREATE DATABASE authentication_apis_db;
USE authentication_apis_db;
CREATE TABLE IF NOT EXISTS users(
    id INT(11) UNIQUE NOT NULL AUTO_INCREMENT,
    username VARCHAR(20) NOT NULL,
    email VARCHAR(20) NOT NULL,
    password VARCHAR(200) NOT NULL,
    PRIMARY KEY(id)
);