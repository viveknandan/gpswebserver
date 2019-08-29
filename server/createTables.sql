CREATE SCHEMA `gt03`;
CREATE TABLE `gt03`.`temperature` (
  `seq` INT NOT NULL AUTO_INCREMENT,
  `temperatureValue` FLOAT NULL,
  `unit` VARCHAR(45) NULL,
  `timestamp` INT NULL,
  `deviceID` VARCHAR(45) NULL,
  `deviceName` VARCHAR(45) NULL,
  UNIQUE INDEX `seq_UNIQUE` (`seq` ASC) ,
  PRIMARY KEY (`seq`))
COMMENT = 'Records temperature of device';
CREATE TABLE `gt03`.`speed` (
  `seq` INT NOT NULL AUTO_INCREMENT,
  `speedValue` VARCHAR(45) NULL,
  `timestamp` VARCHAR(45) NULL,
  `unit` VARCHAR(45) NULL,
  `deviceID` VARCHAR(45) NULL,
  `deviceName` VARCHAR(45) NULL,
  PRIMARY KEY (`seq`),
  UNIQUE INDEX `seq_UNIQUE` (`seq` ASC))
COMMENT = 'Speed of vehicle reported by GPS device';
CREATE TABLE `gt03`.`altitude` (
  `seq` INT NOT NULL AUTO_INCREMENT,
  `timestamp` INT NULL,
  `altitudeValue` INT NULL,
  `accuracy` FLOAT NULL,
  `unit` VARCHAR(45) NULL,
  `deviceID` VARCHAR(45) NULL,
  `deviceName` VARCHAR(45) NULL,
  PRIMARY KEY (`seq`),
  UNIQUE INDEX `seq_UNIQUE` (`seq` ASC))
COMMENT = 'Stores altitude  from GPS device';
CREATE TABLE `gt03`.`location` (
  `seq` INT NOT NULL AUTO_INCREMENT,
  `timestamp` INT NULL,
  `latitude` DOUBLE NULL,
  `longitude` DOUBLE NULL,
  `accuracy` FLOAT NULL,
  `deviceID` VARCHAR(45) NULL,
  `deviceName` VARCHAR(45) NULL,
  PRIMARY KEY (`seq`),
  UNIQUE INDEX `seq_UNIQUE` (`seq` ASC))
COMMENT = 'GPS Location Table stores latitude and latitude';

