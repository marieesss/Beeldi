CREATE TABLE equipments (
  `key`VARCHAR(255)  NOT NULL,
  `brand` VARCHAR(255) NOT NULL,
  `building` VARCHAR(255),
  `domain` VARCHAR(255),
  `local` VARCHAR(255),
  `model` VARCHAR(255),
  `name` VARCHAR(255),
  `nbFaults` VARCHAR(255),
  `niveau` VARCHAR(255),
  `notes` VARCHAR(255),
  `photo` VARCHAR(255),
  `quantity` VARCHAR(255),
  `serialNumber` VARCHAR(255),
  `status`  VARCHAR(255),
  PRIMARY KEY (`key`)
);

CREATE TABLE checkpoints (
  `key` VARCHAR(255)  NOT NULL,
  `equipmentKey` VARCHAR(255)  NOT NULL,
  `fault` VARCHAR(255),
  `name` VARCHAR(255),
  `photo` VARCHAR(255),
  `recommandation` VARCHAR(255),
  PRIMARY KEY (`key`),
  FOREIGN KEY (`equipmentKey`) REFERENCES `equipments`(`key`)
);

LOAD DATA INFILE '/var/lib/mysql-files/equipments.csv'
INTO TABLE equipments
CHARACTER SET utf8mb4
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE '/var/lib/mysql-files/checkpoints.csv'
INTO TABLE checkpoints
CHARACTER SET utf8mb4
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;
