var SQL = require('./db');
const path = require('path');
const csv=require('csvtojson');

const createTables = (req, res) => {
    if (!res.headersSent) createVolTbl(req, res);
    if (!res.headersSent) createAsoTbl(req, res);
    if (!res.headersSent) createVolReg(req, res);
    if (!res.headersSent) createcomEventTbl(req, res);
    if (!res.headersSent) res.send("All Tables created successfully");
};

const insertTables = (req, res) => {
    if (!res.headersSent) insertDataVol(req, res);
    if (!res.headersSent) insertDataAso(req, res);
    if (!res.headersSent) insertDataVolReg(req, res);
    if (!res.headersSent) insertDataComEvent(req, res);
    if (!res.headersSent) res.send("All Tables data inserted successfully");
};

const createVolTbl = (req, res) => {
    var Q1 ="CREATE TABLE IF NOT EXISTS `volunteers`(UserName varchar(50) NOT NULL PRIMARY KEY, Name varchar(50) NOT NULL, Password varchar(50) NOT NULL, Mail varchar(225) NOT NULL, Phone varchar(13) NOT NULL,  Description varchar(200) NULL, Age int(2) NOT NULL, Gender varchar(6))";
    SQL.query(Q1, (err, mySQLres) => {
        if (err) {
            console.log("error ", err);
            res.status(400).send({
                message: "error in creating volunteers table",
            });
            return;
        }
        console.log("created volunteers table");
    });
};

const createAsoTbl = (req, res) => {
    var Q2 ="CREATE TABLE IF NOT EXISTS `associations`(UserName varchar(50) NOT NULL PRIMARY KEY, Name varchar(50) NOT NULL, Password varchar(50) NOT NULL, Mail varchar(225) NOT NULL, Phone varchar(13) NOT NULL, Description varchar(200) NULL, Type varchar(25) NOT NULL, LocationAssociation varchar(100) NOT NULL, FoundationDate date NOT NULL, ActiveVol int(5) NULL, URLAso varchar(250) NOT NULL, AssociationDays varchar(20) NOT NULL, AssociationHours varchar(20) NOT NULL)";
    SQL.query(Q2, (err, mySQLres) => {
        if (err) {
            console.log("error ", err);
            res.status(400).send({
                message: "error in creating associations table",
            });
            return;
        }
        console.log("created associations table");
    });
};

const createcomEventTbl = (req, res) => {
    var Q3 ="CREATE TABLE IF NOT EXISTS `communityEvent`(EventNumber INT NOT NULL AUTO_INCREMENT PRIMARY KEY, EventName varchar(100) NOT NULL, Purpose varchar(225) NULL, InitiatorName varchar(50) NULL, StartDate date NOT NULL, EndDate date NOT NULL, BeginningTime varchar(5) NOT NULL, EndTime varchar(5) NOT NULL, Location varchar(80) NOT NULL, MinimumVolunteers int(5) NULL, MaximumVolunteers int(10) NULL, RequiredEquipment varchar(200) NULL, Notes varchar(100) NULL, PhoneUser varchar(13) NOT NULL, VolCreate varchar(50) Null, AsoCreate varchar(50) Null)";
    SQL.query(Q3, (err, mySQLres) => {
        if (err) {
            console.log("error ", err);
            res.status(400).send({
                message: "error in creating comEvent table",
            });
            return;
        }
        console.log("created communityEvent table");
    });
};

const createVolReg = (req, res) => {
    var Q4 ="CREATE TABLE IF NOT EXISTS `volunteeringRegistration` (RegId INT NOT NULL AUTO_INCREMENT PRIMARY KEY, VolunteerReg VARCHAR(50) NOT NULL, AssociationReg VARCHAR(50) NOT NULL, DateVol DATE NOT NULL, HourVol VARCHAR(5) NOT NULL)";
    SQL.query(Q4, (err, mySQLres) => {
        if (err) {
            console.log("error ", err);
            res.status(400).send({ message: "error in creating volReg table" });
            return;
        }
        console.log("created volunteeringRegistration table");
    });
};

const insertDataVol = (req, res) => {
    var Q5 ="INSERT INTO volunteers SET ?";
    const csvFilePath = path.join(__dirname, "volunteers.csv");

    csv()
        .fromFile(csvFilePath)
        .then((jsonObj) => {
            jsonObj.forEach((element) => {
                var NewEntry = {
                    UserName: element.UserName,
                    Name: element.Name,
                    Password: element.Password,
                    Mail: element.Mail,
                    Phone: element.Phone,
                    Description: element.Description,
                    Age: element.Age,
                    Gender: element.Gender,
                };

                SQL.query(Q5, NewEntry, (err, mysqlres) => {
                    if (err) {
                        console.log("error in inserting volunteers data", err);
                        res.status(400).send({
                            message: "error in inserting volunteers data",
                        });
                    }
                    console.log("created row sucssefuly ");
                });
            });
        });
    console.log("volunteers data inserted");
};

const insertDataAso = (req, res) => {
    var Q6 = "INSERT INTO associations SET ?";
    const csvFilePath = path.join(__dirname, "associations.csv");

    csv()
        .fromFile(csvFilePath)
        .then((jsonObj) => {
            jsonObj.forEach((element) => {
                var NewEntry = {
                    UserName: element.UserName,
                    Name: element.Name,
                    Password: element.Password,
                    Mail: element.Mail,
                    Phone: element.Phone,
                    Description: element.Description,
                    Type: element.Type,
                    LocationAssociation: element.LocationAssociation,
                    FoundationDate: element.FoundationDate,
                    ActiveVol: element.ActiveVol,
                    URLAso: element.URLAso,
                    AssociationDays: element.AssociationDays,
                    AssociationHours: element.AssociationHours,
                };
                SQL.query(Q6, NewEntry, (err, mysqlres) => {
                    if (err) {
                        console.log(
                            "error in inserting associations data",
                            err
                        );
                        res.status(400).send({
                            message: "error in inserting associations data",
                        });
                    }
                    console.log("created row sucssefuly ");
                });
            });
        });
    console.log("associations data inserted");
};

const insertDataComEvent = (req, res) => {
    var Q7 = "INSERT INTO communityEvent SET ?";
    const csvFilePath = path.join(__dirname, "communityEvent.csv");

    csv()
        .fromFile(csvFilePath)
        .then((jsonObj) => {
            jsonObj.forEach((element) => {
                var NewEntry = {
                    EventNumber: element.EventNumber,
                    EventName: element.EventName,
                    Purpose: element.Purpose,
                    InitiatorName: element.InitiatorName,
                    StartDate: element.StartDate,
                    EndDate: element.EndDate,
                    BeginningTime: element.BeginningTime,
                    EndTime: element.EndTime,
                    Location: element.Location,
                    MinimumVolunteers: element.MinimumVolunteers,
                    MaximumVolunteers: element.MaximumVolunteers,
                    RequiredEquipment: element.RequiredEquipment,
                    Notes: element.Notes,
                    PhoneUser: element.PhoneUser,
                    VolCreate: element.VolCreate,
                    AsoCreate: element.AsoCreate,
                };
                SQL.query(Q7, NewEntry, (err, mysqlres) => {
                    if (err) {
                        console.log(
                            "error in inserting communityEvent data",
                            err
                        );
                        res.status(400).send({
                            message: "error in inserting communityEvent data",
                        });
                    }
                    console.log("created row sucssefuly ");
                });
            });
        });
    console.log("communityEvent data inserted");
};

const insertDataVolReg = (req, res) => {
    var Q8 = "INSERT INTO volunteeringRegistration SET ?";
    const csvFilePath = path.join(__dirname, "volunteeringRegistration.csv");

    csv()
        .fromFile(csvFilePath)
        .then((jsonObj) => {
            jsonObj.forEach((element) => {
                var NewEntry = {
                    RegId: element.RegId,
                    VolunteerReg: element.VolunteerReg,
                    AssociationReg: element.AssociationReg,
                    DateVol: element.DateVol,
                    HourVol: element.HourVol,
                };
                SQL.query(Q8, NewEntry, (err, mysqlres) => {
                    if (err) {
                        console.log(
                            "error in inserting volunteeringRegistration data",
                            err
                        );
                        res.status(400).send({
                            message:
                                "error in inserting volunteeringRegistration data",
                        });
                    }
                    console.log("created row sucssefuly ");
                });
            });
        });
    console.log("volunteeringRegistration data inserted");
};

const signIn = (req, res) => {
    const { username, password } = req.body;
    var Q9 =
        "SELECT * FROM web.volunteers WHERE `UserName` = '" +
        username +
        "' AND `Password` = '" +
        password +
        "' LIMIT 1";

    SQL.query(Q9, function (err, data, fields) {
        if (err) {
            res.status(500).json({ status: 500, error: err.message });
        } else if (data?.length > 0) {
            res.status(200).json({
                type: "vol",
                status: 200,
                response: JSON.parse(JSON.stringify(data[0])),
            });
        } else {
            var Q10 =
                "SELECT * FROM web.associations WHERE `UserName` = '" +
                username +
                "' AND `Password` = '" +
                password +
                "' LIMIT 1";

            SQL.query(Q10, function (err, data, fields) {
                if (err) {
                    res.status(500).json({ status: 500, error: err.message });
                } else if (data?.length > 0) {
                    res.status(200).json({
                        type: "aso",
                        status: 200,
                        response: JSON.parse(JSON.stringify(data[0])),
                    });
                } else {
                    res.status(404).json({
                        status: 404,
                        response:
                            "no user found for the given username and password",
                    });
                }
            });
        }
    });
};

const signUp = (req, res) => {
    if (!req.body) {
        res.status(404).json({ status: 404, error: "No form data found" });
    } else {
        var Q11 = "";
        if (req.body.type == "aso") {
            var NewEntry = {
                UserName: req.body.UserName,
                Name: req.body.Name,
                Password: req.body.Password,
                Mail: req.body.Mail,
                Phone: req.body.Phone,
                Description: req.body.Description,
                Type: req.body.Type,
                LocationAssociation: req.body.LocationAssociation,
                FoundationDate: req.body.FoundationDate,
                ActiveVol: req.body.ActiveVol,
                URLAso: req.body.URLAso,
                AssociationDays: req.body.AssociationDays,
                AssociationHours: req.body.AssociationHours,
            };

            Q11 += `INSERT INTO web.associations(UserName, Name, Password, Mail, Phone, Description, Type, LocationAssociation, FoundationDate, ActiveVol, URLAso, AssociationDays, AssociationHours) 
            VALUES ('${NewEntry.UserName}','${NewEntry.Name}','${NewEntry.Password}','${NewEntry.Mail}','${NewEntry.Phone}','${NewEntry.Description}','${NewEntry.Type}','${NewEntry.LocationAssociation}','${NewEntry.FoundationDate}','${NewEntry.ActiveVol}','${NewEntry.URLAso}','${NewEntry.AssociationDays}','${NewEntry.AssociationHours}')`;
        } else if (req.body.type == "vol") {
            var NewEntry = {
                UserName: req.body.UserName,
                Name: req.body.Name,
                Password: req.body.Password,
                Mail: req.body.Mail,
                Phone: req.body.Phone,
                Description: req.body.Description,
                Age: req.body.Age,
                Gender: req.body.Gender,
            };

            Q11 += `INSERT INTO web.volunteers(UserName, Name, Password, Mail, Phone, Description, Age, Gender) 
            VALUES ('${NewEntry.UserName}','${NewEntry.Name}','${NewEntry.Password}','${NewEntry.Mail}','${NewEntry.Phone}','${NewEntry.Description}','${NewEntry.Age}','${NewEntry.Gender}')`;
        }

        console.log(Q11);

        SQL.query(Q11, function (err, mysqlres) {
            if (err) {
                res.status(500).json({ status: 500, error: err.message });
            } else {
                res.status(201).json({
                    status: 201,
                    response: "user created!",
                });
            }
        });
    }
};

const newCommunityEvent = (req, res) => {
    var sqlQuery = `INSERT INTO communityEvent(EventName, Purpose, InitiatorName, StartDate, EndDate, BeginningTime, EndTime, Location, MinimumVolunteers, MaximumVolunteers, RequiredEquipment, Notes, PhoneUser, VolCreate, AsoCreate) 
    VALUES ('${req.body.EventName}','${req.body.Purpose}','${req.body.InitiatorName}','${req.body.StartDate}','${req.body.EndDate}','${req.body.BeginningTime}','${req.body.EndTime}','${req.body.Location}','${req.body.MinimumVolunteers}','${req.body.MaximumVolunteers}','${req.body.RequiredEquipment}','${req.body.Notes}','${req.body.PhoneUser}','${req.body.VolCreate}','${req.body.AsoCreate}')`;

    console.log(sqlQuery);

    SQL.query(sqlQuery, (err, mySQLres) => {
        if (err) {
            console.log("error in insert to communityEvent table ", err);
            res.status(500).send("error in insert to communityEvent table");
            return;
        }
        res.status(201).json({
            status: 201,
            response: "communityEvent inserted!",
        });
    });
};

const volunteeringRegistration = (req, res) => {
    var sqlQuery = `INSERT INTO web.volunteeringRegistration (VolunteerReg, AssociationReg, DateVol, HourVol) VALUES ('${req.body.VolunteerReg}','${req.body.AssociationReg}','${req.body.DateVol}','${req.body.HourVol}')`;
    
    console.log(sqlQuery);

    SQL.query(sqlQuery, (err, mySQLres) => {
        if (err) {
            console.log("error in insert to volunteeringRegistration table ", err);
            res.status(500).send("error in insert to volunteeringRegistration table");
            return;
        }
       res.status(201).json({
           status: 201,
           response: "volunteeringRegistration inserted!",
       });
    });
};

const removeEvent = (req, res) => {
    var Q9 = `DELETE FROM web.communityEvent WHERE EventNumber = ${req.params.id}`;
    SQL.query(Q9, (err, mySQLres) => {
        if (err) {
            console.log("error in remove from communityEvent", err);
            res.status(500).send("error in remove from communityEvent");
            return;
        }
        res.status(200).json({
            status: 200,
            response: "communityEvent removed!",
        });
    });
};

const declineEvent = (req, res) => {
    var Q9 = `DELETE FROM web.volunteeringRegistration WHERE RegId = ${req.params.id}`;
    SQL.query(Q9, (err, mySQLres) => {
        if (err) {
            console.log("error in remove from volunteeringRegistration", err);
            res.status(500).send("error in remove from volunteeringRegistration");
            return;
        }
        res.status(200).json({
            status: 200,
            response: "volunteeringRegistration removed!",
        });
    });
};


const showTableVol = (req, res) => {
    var Q9 = "SELECT * FROM volunteers";
    SQL.query(Q9, (err, mySQLres) => {
        if (err) {
            console.log("error in showing volunteers table ", err);
            res.status(500).send("error in showing volunteers table ");
            return;
        }
        console.log("showing table volunteers");
        res.status(200).send({ data: JSON.parse(JSON.stringify(mySQLres)) });
    });
};

const showTableAso = (req, res) => {
    var Q10 = "SELECT * FROM associations";
    SQL.query(Q10, (err, mySQLres) => {
        if (err) {
            console.log("error in showing associations table ", err);
            res.status(500).send("error in showing associations table ");
            return;
        }
        console.log("showing table associations");
        res.status(200).send({
            data: JSON.parse(JSON.stringify(mySQLres)),
        });
    });
};

const showTableComEvent = (req, res) => {
    var Q11 = "SELECT * FROM communityEvent";
    SQL.query(Q11, (err, mySQLres) => {
        if (err) {
            console.log("error in showing communityEvent table ", err);
            res.status(500).send("error in showing communityEvent table ");
            return;
        }
        console.log("showing table communityEvent");
        res.status(200).send({
            data: JSON.parse(JSON.stringify(mySQLres)),
        });
    });
};

const showTblVolReg = (req, res) => {
    var Q12 = "SELECT * FROM volunteeringRegistration";
    SQL.query(Q12, (err, mySQLres) => {
        if (err) {
            console.log(
                "error in showing volunteeringRegistration table ",
                err
            );
            res.status(500).send(
                "error in showing volunteeringRegistration table "
            );
            return;
        }
        console.log("showing table volunteeringRegistration");
        res.status(200).send({
            data: JSON.parse(JSON.stringify(mySQLres)),
        });
    });
};

const dropTblVol = (req, res) => {
    var Q13 = "DROP TABLE volunteers";
    SQL.query(Q13, (err, mySQLres) => {
        if (err) {
            console.log("error in droping table volunteers ", err);
            res.status(400).send({
                message: "error om dropping table volunteers" + err,
            });
            return;
        }
        console.log("table volunteers dropped");
    });
};

const dropTblAso = (req, res) => {
    var Q14 = "DROP TABLE associations";
    SQL.query(Q14, (err, mySQLres) => {
        if (err) {
            console.log("error in droping table associations ", err);
            res.status(400).send({
                message: "error om dropping table associations" + err,
            });
            return;
        }
        console.log("table associations dropped");
    });
};

const dropTblComEvent = (req, res) => {
    var Q15 = "DROP TABLE communityEvent";
    SQL.query(Q15, (err, mySQLres) => {
        if (err) {
            console.log("error in droping table communityEvent", err);
            res.status(400).send({
                message: "error om dropping table communityEvent" + err,
            });
            return;
        }
        console.log("table communityEvent dropped");
    });
};

const dropTblVolReg = (req, res) => {
    var Q16 = "DROP TABLE volunteeringRegistration";
    SQL.query(Q16, (err, mySQLres) => {
        if (err) {
            console.log("error in droping table volunteeringRegistration", err);
            res.status(400).send({
                message:
                    "error om dropping table volunteeringRegistration" + err,
            });
            return;
        }
        console.log("table volunteeringRegistration dropped");
        res.send("table volunteeringRegistration dropped");
        return;
    });
    return;
};

module.exports = {
    createTables,
    insertTables,
    signIn,
    signUp,
    newCommunityEvent,
    volunteeringRegistration,
    removeEvent,
    declineEvent,
    showTableVol,
    showTableAso,
    showTableComEvent,
    showTblVolReg,
    dropTblVol,
    dropTblAso,
    dropTblComEvent,
    dropTblVolReg,
};


