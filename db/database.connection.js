const mysql = require("mysql");
//Create Database Connection
const conn = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "Chayan@2020",
	database: "crud",
});

// connect to database
conn.connect((err) => {
	if (err) throw err;
	console.log("MySQL is connected");
});
module.exports = conn;

