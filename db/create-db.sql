CREATE DATABASE web;

USE web;

CREATE TABLE IF NOT EXISTS `volunteers` (
    -> UserName varchar(50) NOT NULL PRIMARY KEY,
    -> Name varchar(50) NOT NULL,
    -> Password varchar(50) NOT NULL,
    -> Mail varchar(225) NOT NULL,
    -> Phone varchar(13) NOT NULL,
    -> Description varchar(200) NULL,
    -> Age int(2) NOT NULL,
    -> Gender varchar(6) NULL
    -> )ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `associations` (
    ->     UserName varchar(50) NOT NULL PRIMARY KEY,
    ->     Name varchar(50) NOT NULL,
    ->     Password varchar(50) NOT NULL,
    ->     Mail varchar(225) NOT NULL,
    ->     Phone varchar(13) NOT NULL,
    ->     Description varchar(200) NULL,
    ->     Type varchar(25) NOT NULL,
    ->     LocationAssociation varchar(100) NOT NULL,
    ->     FoundationDate date NOT NULL,
    ->     ActiveVol int(5) NULL,
    ->     URLAso varchar(250) NOT NULL,
    ->     AssociationDays varchar(20) NOT NULL,
    ->     AssociationHours varchar(5) NOT NULL
    -> ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `communityEvent` (
    ->  EventNumber INT(255) NOT NULL PRIMARY KEY,
    -> EventName varchar(100) NOT NULL,
    -> Purpose varchar(225) NULL,
    -> InitiatorName varchar(50) NULL,
    -> StartDate date NOT NULL,
    -> EndDate date NOT NULL,
    -> BeginningTime varchar(5) NOT NULL,
    -> EndTime varchar(5) NOT NULL,
    ->  Location varchar(80) NOT NULL,
    -> MinimumVolunteers int(5) NULL,
    -> MaximumVolunteers int(10) NULL,
    -> RequiredEquipment varchar(200) NULL,
    -> Notes varchar(100) NULL,
    -> PhoneUser varchar(13) NOT NULL,
    -> VolCreate varchar(50) Null,
    -> AsoCreate varchar(50) Null,
    -> FOREIGN KEY (VolCreate) REFERENCES volunteers (UserName),
    -> FOREIGN KEY (AsoCreate) REFERENCES associations (UserName)
    -> )ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `volunteeringRegistration` (
    ->     RegId INT(255) NOT NULL PRIMARY KEY,
    ->     VolunteerReg VARCHAR(50) NOT NULL,
    ->     AssociationReg VARCHAR(50) NOT NULL,
    ->     DateVol DATE NOT NULL,
    ->     HourVol VARCHAR(5) NOT NULL,
    ->     FOREIGN KEY (VolunteerReg) REFERENCES volunteers (UserName),
    ->     FOREIGN KEY (AssociationReg) REFERENCES associations (UserName)
    -> ) ENGINE=InnoDB DEFAULT CHARSET=utf8;