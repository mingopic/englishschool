CREATE DATABASE IF NOT EXISTS englishschool;

CREATE USER 'englishSchoolUser'@'%' IDENTIFIED BY '3ngl15hadm1n'; -- Creates the user
GRANT ALL ON englishschool.* to 'englishSchoolUser'@'%'; -- Gives all privileges to the new user on the newly created database