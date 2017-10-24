### Schema

CREATE DATABASE crono_DB;

USE crono_DB;

CREATE TABLE projects
(
	id int NOT NULL AUTO_INCREMENT,
	project_name VARCHAR(255) NOT NULL,
  project_description VARCHAR(255) NOT NULL,
	pay_rate INT(255) NOT NULL,
	allocated_time INT(255),
  deadline TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	notes TEXT(255),
	PRIMARY KEY (id)
);
