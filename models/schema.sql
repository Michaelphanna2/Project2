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

-- Services table 
CREATE TABLE services (
	userId Int NOT NULL,
    serviceTitle VARCHAR (255) NOT NULL,
    serviceUserName VARCHAR (255) NOT NULL, 
    servicePassword VARCHAR (255) NOT NULL
);

INSERT INTO autheticate (pVusername, pVpassword) 
VALUES ("Bruce123", "Password1"); 
INSERT INTO autheticate (pVusername, pVpassword) 
VALUES ("Temi123", "Password2") ;
INSERT INTO autheticate (pVusername, pVpassword) 
VALUES ("Keith123", "Password3"); 
INSERT INTO autheticate (pVusername, pVpassword) 
VALUES ("Mike123", "Password4"); 

INSERT INTO services (userId, serviceTitle, serviceUserName, servicePassword) 
VALUES ("1", "Twitter", "BALT", "TestServicePassword"); 
INSERT INTO services (userId, serviceTitle, serviceUserName, servicePassword) 
VALUES ("1", "Facebook", "BALT", "TestServicePassword2"); 
INSERT INTO services (userId, serviceTitle, serviceUserName, servicePassword)
VALUES ("2", "Twitter", "TEMI!", "TestServicePassword3"); 
INSERT INTO services (userId, serviceTitle, serviceUserName, servicePassword)
VALUES ("3", "RandomService", "Keith", "TestServicePassword4");  

SELECT * FROM autheticate; 
SELECT * FROM services;
