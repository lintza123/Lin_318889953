const mysql = require('mysql2');
const dbConfig = require('./db.config');

// create connection
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

connection.connect();

connection.query('CREATE DATABASE IF NOT EXISTS web', function (err, results) {
    if (err) throw err;
    console.log('Created database');
});

connection.query('USE web', function (err, results) {
    if (err) throw err;
    console.log('Selected database');
  });
  
//open the connection
connection.connect( error =>{
    if (error) throw error;
    console.log("successfuly conected to DB");
});

module.exports = connection;

