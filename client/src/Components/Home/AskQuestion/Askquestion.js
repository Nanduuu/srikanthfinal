import React from 'react';
import {Button,Input} from 'antd';
import {Col,Row} from 'antd';
import './Askquestion.css';
import {message} from 'antd';
import axios from 'axios';
import {setTechnology} from './Actions.js';
import {connect} from 'react-redux'


const success = (text)=>{
	message.success(text);

}
const error = (text)=>{
	message.error(text);
}
const Search = Input.Search;
var techs = [ "CyberArk", "Sailpoint" , "Splunk" ,"Devops","AWS","C,C++","Salesforce (Both Admin and Developer)" ,
						"Big Data",  "Tableau", "QlikView" , "Cognos" , "BLOCKCHAIN",  "Ping federate" , "CA Siteminder",
						"Ping Access" , "NetIQ" , "NetIQ Governance and Access manager", "ISAM", "WebSphere (Both Admin and Developer)",
						"Weblogic (Both Admin and Developer)", "IDM","SSO","Embedded IOT","RUBY on RAILS", "MICROSTRATEGY",
						"Sharepoint (Both Admin and Developer)","SAS","Full stack Developer","Angular2,Angular3","ETL,Datastage",
						"Qlikview","Qliksense","Tableau","Microstrategy","Data science","BIG Data Hadoop","Artifical Intelligence",
						"R","Python","Machine learning","SQl,PLSQL","Testing (Manual,Automation)","Java backend (Struts, Hybernates)",
						"CCNA,CCNP,CCIE","Linux,shell scripting"
					]


const mapStateToProps = (state)=>{

	return {
		tech_num : state.TechnologyReducer.tech_num,
		technology : state.TechnologyReducer.technology,

	}
	

}

const mapDispatchToProps = (Dispatch)=>{
	return {
		setTechnology : (data)=>{
			Dispatch(setTechnology(data))
		},
	}
	

}

class Askquestion extends React.Component{
	constructor(props){
		super(props);

		this.state={
			displayAskQuestion : false,
			question : "",

		}
	}

	askQuestionToggle = ()=>{
		this.setState({
			displayAskQuestion : !this.state.displayAskQuestion,
		})
	}

	OnChange = (e)=>{
		this.setState({
			[e.target.name] : e.target.value,
		})
	}

	postQuestion = ()=>{

		const data = {

			tech_num :this.props.tech_num,
			question :this.state.question,
		}


		if(this.state.question.length > 0){

				axios.post('/api/postQuestion/', data).then( function (res){

							console.log(res)
							if(res){
								success("Question posted .....!");
							}else{
								error("Issue with Database")
							}

					}.bind(this)).catch( function(err){

						console.log(err)
						error("Issue with Database")
					});
			}else{
				error("Please enter Question");
			}
	}

	search = (text)=>{

		this.props.setTechnology({

			tech_num: this.props.tech_num,
			technology:this.props.technology,
			key: text,

		})
			
	}

	render(){
		return(
				<div >
						<div>
							<h3 style={{color:"black-inline"}}>{techs[this.props.tech_num - 1]} </h3>
						</div>
					
					<div style={{display: this.state.displayAskQuestion ? "block" : "none"}}>
							<p>We’d love to help you, but the reality is that not every question gets answered. To improve your chances, here are some tips:</p>
							<h5>Search, and research </h5> 
							<p>Have you thoroughly searched for an answer before asking your question? Sharing your research helps everyone. Tell us what you found (on this site or elsewhere) and why it didn’t meet your needs. This demonstrates that you’ve taken the time to try to help yourself, it saves us from reiterating obvious answers, and above all, it helps you get a more specific and relevant answer!</p>
							<div className="question-div">
								<Row>
									<Col xs={20} sm={22} md={20} lg={20} xl={20} >
										<Input name="question" onChange={this.OnChange} className = "input" placeholder="Enter your question" />
										
									</Col>
									<Col xs={4} sm={2} md={4} lg={4} xl={4}  >
										<Button onClick = {this.postQuestion} type="primary" className = "button"> Post </Button>
									</Col>
								</Row>
							</div>
					</div>

					<div style={{position:"relative"}}>
						<div style={{position:"relative"}}>					
							<button  className = "askButton" type="primary" onClick={ this.askQuestionToggle }> {this.state.displayAskQuestion ? "Close" : "Ask Question !"} </button>
						</div>
					</div>
					
					<div className={this.state.displayAskQuestion ? "search-hide" : "search-display"}>
                             <Search
                                 placeholder="input search text"
                                 name= "search"
                                 onSearch={value => this.search(value)}
                                 enterButton
                                 onChange = {this.onChange}
                              />

                    </div>

				</div>
			)
	}

}


export default connect (mapStateToProps, mapDispatchToProps)(Askquestion);