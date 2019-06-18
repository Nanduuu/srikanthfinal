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

			var sql_num = `select max(ans_num) as max from answer;`;

			con.query(sql_num, function(err, result){

				

				if(err){
					res.send({result : false})
				}else{

					var data = {
						ans_num : result[0].max + 1,
						ques_num : req.body.ques_num,
						answer : req.body.answer,
						likes : 0,
						dislikes :0,
						timestamp : new Date(),
					}

					con.query(`insert into answer set ?` ,data, function(err, result){
							
							res.send({success:true})
					})
				}
				
			})
		}
	
		  console.log(req.body)

	 
		   

})

module.exports = router;