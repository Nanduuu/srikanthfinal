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

			var sql_num = `select max(ques_num) as max from ques;`;

			con.query(sql_num, function(err, result){

				

				if(err){
					res.send({result : false})
				}else{

					var data = {
						ques_num : result[0].max + 1,
						tech_num : req.body.tech_num,
						question : req.body.question,
						timestamp : new Date(),
					}

					con.query(`insert into ques set ?` ,data, function(err, result){
							
							res.send({success:true})
							con.end();
					})
				}
				
			})
		}
	


})

module.exports = router;