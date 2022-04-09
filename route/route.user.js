const express = require('express');
const { createUser } = require('../controller/controller.users');
const router = express.Router();

//const mysql = require("mysql");
//Create Database Connection
const conn = require("../db/database.connection");
/* const conn = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "Chayan@2020",
	database: "crud",
});

// connect to database
conn.connect((err) => {
	if (err) throw err;
	console.log("MySQL is connected");
}); */

router.post("/api/create", createUser);

module.exports = router;

//const userRoute = require('./route.user');
//app.use(userRoute);