DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT NOT NULL auto_increment,
  userMessage VARCHAR(20),
  user_id INT,
  room_id INT,
  PRIMARY KEY (id)

);

CREATE TABLE users (
  id INT NOT NULL auto_increment,
  username VARCHAR(20),
  PRIMARY KEY (id)
);

CREATE TABLE rooms (
  id INT NOT NULL auto_increment,
  room VARCHAR(20),
  PRIMARY KEY (id)
);

  ALTER TABLE messages ADD FOREIGN KEY (user_id) REFERENCES users (id);
  ALTER TABLE messages ADD FOREIGN KEY (room_id) REFERENCES rooms (id);
/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

