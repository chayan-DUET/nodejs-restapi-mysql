const mysql = require("mysql");
const conn = require("../db/database.connection");
const fs = require("fs");
exports.createUser = (req, res) => {
	let data = { name: req.body.name, location: req.body.location, image: req.file.filename };
	let sql = "INSERT INTO users SET ?";
	let query = conn.query(sql, data, (err, result) => {
		if (err) throw err;
		res.send(JSON.stringify({ status: 200, error: null, response: "New Record is Added successfully" }));
	});
};
// show all record
exports.showUser =(req, res) => {
	let sql = "SELECT * FROM users";
	let query = conn.query(sql, (err, result) => {
		if (err) throw err;
		res.send(JSON.stringify({ status: 200, error: null, response: result }));
	});
};

// show a single record
exports.getByID = (req, res) => {
	let sql = "SELECT * FROM users WHERE id=" + req.params.id;
	let query = conn.query(sql, (err, result) => {
		if (err) throw err;
		res.send(JSON.stringify({ status: 200, error: null, response: result }));
	});
};

// delete the record
exports.deleteByID = (req, res) => {
	let sql = "DELETE FROM users WHERE id=" + req.params.id + "";
	let query = conn.query(sql, (err, result) => {
		if (err) throw err;
		res.send(JSON.stringify({ status: 200, error: null, response: "Record deleted successfully" }));
	});
};

//update the record by id
exports.updateByID = async(req, res) => {
	var user_info = [];
	let sql1 = "SELECT * FROM users WHERE id=" + req.params.id;
	try{
	  conn.query(sql1, (err, result) => {
		if (err) throw err;
	//console.log('test1',result[0]);
	user_info = result;
	fs.unlinkSync("./images/" + result[0].image);
	
	});}catch(err){
		res.send({ status: 200, error: null, response:"user_info "});
	}

	
	let sql = "UPDATE users SET name='" + req.body.name + "', location='" + req.body.location + "', image='" + req.file.filename + "' WHERE id=" + req.body.id;
	let query = conn.query(sql, (err, result) => {
		if (err) throw err;
		res.send({ status: 200, error: null, response:result });
	});
};