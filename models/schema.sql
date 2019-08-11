DROP DATABASE IF EXISTS passwordVault_db;
CREATE DATABASE passwordVault_db;
USE passwordVault_db;

-- Authenticate table 
CREATE TABLE autheticate (
    userId Int AUTO_INCREMENT NOT NULL,
    pVusername VARCHAR (255) NOT NULL, 
    pVpassword VARCHAR (255) NOT NULL, 
    PRIMARY KEY (userId)
);

