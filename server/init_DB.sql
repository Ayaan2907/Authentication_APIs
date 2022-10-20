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
    Timing VARCHAR(20),
    Location VARCHAR(3),
    PRIMARY KEY(id)
);
INSERT INTO gps_data (
    DeviceId, 
    DeviceType, 
    Location
    )VALUES 
    ('D-1567', 'Aircraft', '31-08-2022 10:05', 'L1'),
    ('D-1567', 'Aircraft', '31-08-2022 10:10', 'L1'),
    ('D-1567', 'Aircraft', '31-08-2022 10:15', 'L1'),
    ('D-1567', 'Aircraft', '31-08-2022 10:20', 'L1'),
    ('D-1567', 'Aircraft', '31-08-2022 10:25', 'L2'),
    ('D-1568', 'Personal', '31-08-2022 10:05', 'L3'),
    ('D-1568', 'Personal', '31-08-2022 10:10', 'L3'),
    ('D-1568', 'Personal', '31-08-2022 10:15', 'L3'),
    ('D-1568', 'Personal', '31-08-2022 10:20', 'L3'),
    ('D-1568', 'Personal', '31-08-2022 10:25', 'L3'),
    ('D-1569', 'Asset', '31-08-2022 10:15', 'L4'),
    ('D-1569', 'Asset', '31-08-2022 10:20', 'L4'),
    ('D-1569', 'Asset', '31-08-2022 10:25', 'L1'),
    ('D-1569', 'Asset', '31-08-2022 10:30', 'L1'),
    ('D-1569', 'Asset', '31-08-2022 10:35', 'L2'),
    ('D-1570', 'Personal', '31-08-2022 10:35', 'L5'),
    ('D-1571', 'Asset', '31-08-2022 10:35', 'L6');
DESCRIBE users;
DESCRIBE gps_data;