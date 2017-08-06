CREATE  DATABASE IF NOT EXISTS restaurant;

USE restaurant;

CREATE TABLE IF NOT EXISTS reservations (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    phone_number INT NOT NULL,
    email VARCHAR(50) NOT NULL,
    primary key (id),
    Unique Key userId(email)
);
