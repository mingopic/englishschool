USE englishschool;

/* ------------------------------------------------------------------------------------- */

DROP TABLE IF EXISTS tb_person;
DROP TABLE IF EXISTS tb_user;


/* ------------------------------------------------------------------------------------- */

CREATE TABLE tb_person (
  PersonId        BIGINT       NOT NULL AUTO_INCREMENT,
  Name            VARCHAR(255) DEFAULT NULL,
  Active          BIT(1)       NOT NULL,
  Visible         BIT(1)       NOT NULL,
  InsertedDate    DATETIME(6)  DEFAULT NULL,
  LastDateUpdated DATETIME(6)  DEFAULT NULL,
  PRIMARY KEY (PersonId)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/* ------------------------------------------------------------------------------------- */

CREATE TABLE tb_user (
  UserId          BIGINT       NOT NULL AUTO_INCREMENT,
  UserName        VARCHAR(255) DEFAULT NULL,
  Password        VARCHAR(255) DEFAULT NULL,
  PersonId        BIGINT       DEFAULT NULL,
  Active          BIT(1)       NOT NULL,
  InsertedDate    DATETIME(6)  DEFAULT NULL,
  LastDateUpdated DATETIME(6)  DEFAULT NULL,
  PRIMARY KEY (UserId)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;