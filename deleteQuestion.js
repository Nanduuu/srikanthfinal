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

			var sql_delete_ques= `delete from ques where ques_num = "${req.body.ques_num}" and tech_num = "${req.body.tech_num}";`;
			console.log(sql_delete_ques)
			con.query(sql_delete_ques, function(err, result){

				console.log(result)

				if(err){
					res.send({result : false})
					con.end();
				}else{

					con.query(`delete from answer where ques_num = "${req.body.ques_num}" ;`, function(err, result){
							
							if(err){
								res.send({result : false})
								con.end();
							}else{
								res.send({success:true})
								con.end();
							}
							
					})
				}
				
			})
		}
	


})

module.exports = router;