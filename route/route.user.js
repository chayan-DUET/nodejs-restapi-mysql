const express = require('express');
const { route } = require('express/lib/application');
const { createUser, showUser, getByID, deleteByID, updateByID } = require('../controller/controller.users');
const router = express.Router();

const multer = require('multer');
const path = require('path');

//! Use of Multer
var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './images/')     
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({
    storage: storage
});

//const mysql = require("mysql");
//Create Database Connection
/* const conn = require("../db/database.connection"); */
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

router.post("/create", upload.single('image'), createUser);
router.get("/view", showUser);
router.get("/view/:id", getByID);
router.delete("/delete/:id", deleteByID);
router.put("/update/:id", updateByID);

module.exports = router;

//const userRoute = require('./route.user');
//app.use(userRoute);