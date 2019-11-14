CREATE DATABASE IF NOT EXISTS chat;

USE chat;

CREATE TABLE IF NOT EXISTS users (
  ID INT NOT NULL AUTO_INCREMENT,
  UserName varchar(255) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS rooms (
  ID INT NOT NULL AUTO_INCREMENT,
  RoomName varchar(255) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS messages (
  ID INT NOT NULL AUTO_INCREMENT,
  MSG varchar(255) NOT NULL,
  RoomId INT NOT NULL,
  UserId INT NOT NULL,
  PRIMARY KEY (ID),
  FOREIGN KEY (UserId) REFERENCES users(ID),
  FOREIGN KEY (RoomId) REFERENCES rooms(ID)
);



/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

