const mysql = require("mysql");
const conn = require("../db/database.connection");
exports.createUser = (req, res) => {
	let data = { name: req.body.name, location: req.body.location };
	let sql = "INSERT INTO users SET ?";
	let query = conn.query(sql, data, (err, result) => {
		if (err) throw err;
		res.send(JSON.stringify({ status: 200, error: null, response: "New Record is Added successfully" }));
	});
};