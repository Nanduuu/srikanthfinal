const express = require('express');
var bodyParser = require('body-parser');
const mysql = require('mysql');
var multer = require('multer');
var md5 = require('md5');
var upload = multer();

const formidable = require('express-formidable');
const fs = require('fs');


var app = express();
//app.use(formidable());
const router = express.Router();
var md5 = require('md5');

//router.use(formidable());
router.post('/',function(req,res){

	var con = mysql.createConnection({
		  host: "localhost",
		  user: "root",
		  password: "root",
		  database: "srikanth"
		});

		if(con){

			if (req.body.key){

				var pattren = '%' + req.body.key.split(" ").join('%') + '%';
				var sql = `select * from ques where tech_num = "${req.body.tech_num}" and question like '${pattren}' ORDER BY timestamp DESC ;`

				
			}else{

				var sql = `select * from ques where tech_num = ${req.body.tech_num} ORDER BY timestamp DESC ;`;

			}

			con.query(sql, function(err, result){

				if(err){
					console.log(err)
					res.send({result : false,questions :[]})
					con.end();
				}else{
					console.log(result)
					res.send({success:true,questions:result})
					con.end();
				
				}
				
			})
		}
	
})

module.exports = router;