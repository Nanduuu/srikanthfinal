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

			var sql_num = `select *  from answer where ans_num = "${req.body.ans_num}";`;

			con.query(sql_num, function(err, result){

				

				if(err){
					console.log(err);
					res.send({result : false})
				}else{
					console.log(result);
					var data = {
						
						ques_num : result[0].ques_num,
						answer : result[0].answer,
						likes :req.body.likes,
						dislikes :req.body.dislikes,
						timestamp : result[0].timestamp,
					}

					con.query(`update  answer set ? where ans_num = "${req.body.ans_num}"` ,data, function(err, result){
							if(err){
								console.log(err)
							}
							console.log(result);
							res.send({success:true})
					})
				}
				
			})
		}
	
 
		   

})

module.exports = router;