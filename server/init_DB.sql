SHOW DATABASES;
CREATE DATABASE IF NOT EXISTS nodejs_application;
USE nodejs_application;
CREATE TABLE IF NOT EXISTS users(
    id INT(11) UNIQUE NOT NULL AUTO_INCREMENT,
    username VARCHAR(10) NOT NULL,
    email VARCHAR(20) NOT NULL,
    password VARCHAR(20) NOT NULL,
    PRIMARY KEY(id)
);
CREATE TABLE IF NOT EXISTS gps_data(
    id INT(11) UNIQUE NOT NULL AUTO_INCREMENT,
    DeviceId VARCHAR(10),
    DeviceType VARCHAR(10),
    Timing TIMESTAMP DEFAULT CURRENT_TIMESTAMP(),
    Location VARCHAR(3),
    PRIMARY KEY(id)
);
INSERT INTO gps_data (
    DeviceId, 
    DeviceType, 
    Location
    )VALUES 
    ('D-1567', 'Aircraft', 'L1'),
    ('D-1568', 'Personal', 'L3'),
    ('D-1565', 'Aircraft', 'L2'),
    ('D-1589', 'Asset', 'L1'),
    ('D-1526', 'Aircraft', 'L2'),
    ('D-1567', 'Aircraft', 'L1'),
    ('D-1568', 'Personal', 'L3'),
    ('D-1565', 'Aircraft', 'L2'),
    ('D-1589', 'Asset', 'L1'),
    ('D-1526', 'Aircraft', 'L2');
DESCRIBE users;
DESCRIBE gps_data;