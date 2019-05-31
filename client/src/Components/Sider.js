import React from 'react';
import './Sider.css';


class Sider extends  React.Component{
	
	constructor(props){
	super(props);
		this.state={
			flex_sider_elemenet : "flex-sider-element",
			selected_flex_sider_element : "selected-flex-sider-element",
			selected : "CyberArk",
		}
	}

	changeCss = (e)=>{

		var techs = [ "CyberArk", "Sailpoint" , "Splunk" ,"Devops","AWS","C,C++","Salesforce (Both Admin and Developer)" ,
						"Big Data",  "Tableau", "QlikView" , "Cognos" , "BLOCKCHAIN",  "Ping federate" , "CA Siteminder",
						"Ping Access" , "NetIQ" , "NetIQ Governance and Access manager", "ISAM", "WebSphere (Both Admin and Developer)",
						"Weblogic (Both Admin and Developer)", "IDM","SSO","Embedded IOT","RUBY on RAILS", "MICROSTRATEGY",
						"Sharepoint (Both Admin and Developer)","SAS","Full stack Developer","Angular2,Angular3","ETL,Datastage",
						"Qlikview","Qliksense","Tableau","Microstrategy","Data science","BIG Data Hadoop","Artifical Intelligence",
						"R","Python","Machine learning","SQl,PLSQL","Testing (Manual,Automation)","Java backend (Struts, Hybernates)",
						"CCNA,CCNP,CCIE","Linux,shell scripting"
					]

		

		console.log(e.target.id)
		this.setState({
			selected:e.target.id,
		})
		
		this.props.tech_num(techs.indexOf(e.target.id))
	}

	render(){
		return(
			<div className="flex-sider-container" id="style-1">
				<div id="CyberArk" name = {1} onClick = { this.changeCss }  className={this.state.selected == "CyberArk" ? "selected-flex-sider-element" : "flex-sider-element"}>
						CyberArk
				</div>

				<div id="Sailpoint" name={2} onClick={this.changeCss}  className={this.state.selected == "Sailpoint" ? "selected-flex-sider-element" : "flex-sider-element"}>
						Sailpoint
				</div>

				<div id="Splunk" onClick={this.changeCss}  className={this.state.selected == "Splunk" ? "selected-flex-sider-element" : "flex-sider-element"}>
						Splunk
				</div>

				<div id="Devops" onClick={this.changeCss}  className={this.state.selected == "Devops" ? "selected-flex-sider-element" : "flex-sider-element"} >
						Devops
				</div>

				<div id="AWS" onClick={this.changeCss}  className={this.state.selected == "AWS" ? "selected-flex-sider-element" : "flex-sider-element"}>
						AWS
				</div>

				<div id="C,C++" onClick={this.changeCss}  className={this.state.selected == "C,C++" ? "selected-flex-sider-element" : "flex-sider-element"} >
						C,C++
				</div>

				<div id="Salesforce (Both Admin and Developer)" onClick={this.changeCss}  className={this.state.selected == "Salesforce (Both Admin and Developer)" ? "selected-flex-sider-element" : "flex-sider-element"} >
						Salesforce (Both Admin and Developer)
				</div>

				<div id="Big Data" onClick={this.changeCss}  className={this.state.selected == "Big Data" ? "selected-flex-sider-element" : "flex-sider-element"}>
						Big Data
				</div>

				<div id="Tableau" onClick={this.changeCss}  className={this.state.selected == "Tableau" ? "selected-flex-sider-element" : "flex-sider-element"}>
						Tableau
				</div>

				<div id="QlikView" onClick={this.changeCss}  className={this.state.selected == "QlikView" ? "selected-flex-sider-element" : "flex-sider-element"}>
						QlikView
				</div>

				<div id="Cognos" onClick={this.changeCss}  className={this.state.selected == "Cognos" ? "selected-flex-sider-element" : "flex-sider-element"} >
						Cognos
				</div>

				<div id="BLOCKCHAIN" onClick={this.changeCss}  className={this.state.selected == "BLOCKCHAIN" ? "selected-flex-sider-element" : "flex-sider-element"} >
						BLOCKCHAIN
				</div>

				<div id="Ping federate" onClick={this.changeCss}  className={this.state.selected == "Ping federate" ? "selected-flex-sider-element" : "flex-sider-element"} >
						Ping federate
				</div>

				<div id="CA Siteminder" onClick={this.changeCss}  className={this.state.selected == "CA Siteminder" ? "selected-flex-sider-element" : "flex-sider-element"} >
						CA Siteminder
				</div>

				<div id="Ping Access" onClick={this.changeCss}  className={this.state.selected == "Ping Access" ? "selected-flex-sider-element" : "flex-sider-element"} >
						Ping Access
				</div>

				<div id="NetIQ" onClick={this.changeCss}  className={this.state.selected == "NetIQ" ? "selected-flex-sider-element" : "flex-sider-element"} >
						NetIQ
				</div>

				<div id="NetIQ Governance and Access manager" onClick={this.changeCss}  className={this.state.selected == "NetIQ Governance and Access manager" ? "selected-flex-sider-element" : "flex-sider-element"} >
						NetIQ Governance and Access manager
				</div>

				<div id="ISAM" onClick={this.changeCss}  className={this.state.selected == "ISAM" ? "selected-flex-sider-element" : "flex-sider-element"} >
						ISAM
				</div>

				<div id="WebSphere (Both Admin and Developer)" onClick={this.changeCss}  className={this.state.selected == "WebSphere (Both Admin and Developer)" ? "selected-flex-sider-element" : "flex-sider-element"} >
						WebSphere (Both Admin and Developer)
				</div>

				<div id="Weblogic (Both Admin and Developer)" onClick={this.changeCss}  className={this.state.selected == "Weblogic (Both Admin and Developer)" ? "selected-flex-sider-element" : "flex-sider-element"} >
						Weblogic (Both Admin and Developer)
				</div>

				<div id="IDM" onClick={this.changeCss}  className={this.state.selected == "IDM" ? "selected-flex-sider-element" : "flex-sider-element"} >
						IDM
				</div>

				<div id="SSO" onClick={this.changeCss}  className={this.state.selected == "SSO" ? "selected-flex-sider-element" : "flex-sider-element"} >
						SSO
				</div>

				<div id="Embedded IOT" onClick={this.changeCss}  className={this.state.selected == "Embedded IOT" ? "selected-flex-sider-element" : "flex-sider-element"} >
						Embedded IOT
				</div>

				<div id="RUBY on RAILS" onClick={this.changeCss}  className={this.state.selected == "RUBY on RAILS" ? "selected-flex-sider-element" : "flex-sider-element"} >
						RUBY on RAILS
				</div>

				<div id="MICROSTRATEGY" onClick={this.changeCss}  className={this.state.selected == "MICROSTRATEGY" ? "selected-flex-sider-element" : "flex-sider-element"} >
						MICROSTRATEGY
				</div>

				<div id="Sharepoint (Both Admin and Developer)" onClick={this.changeCss}  className={this.state.selected == "Sharepoint (Both Admin and Developer)" ? "selected-flex-sider-element" : "flex-sider-element"} >
						Sharepoint (Both Admin and Developer)
				</div>

				<div id="SAS" onClick={this.changeCss}  className={this.state.selected == "SAS" ? "selected-flex-sider-element" : "flex-sider-element"} >
						SAS
				</div>

				<div id="Full stack Developer" onClick={this.changeCss}  className={this.state.selected == "Full stack Developer" ? "selected-flex-sider-element" : "flex-sider-element"} >
						Full stack Developer
				</div>

				<div id="Angular2,Angular3" onClick={this.changeCss}  className={this.state.selected == "Angular2,Angular3" ? "selected-flex-sider-element" : "flex-sider-element"} >
						Angular2,Angular3
				</div>

				<div id="ETL,Datastage" onClick={this.changeCss}  className={this.state.selected == "ETL,Datastage" ? "selected-flex-sider-element" : "flex-sider-element"} >
						ETL,Datastage
				</div>

				<div id="Qlikview" onClick={this.changeCss}  className={this.state.selected == "Qlikview" ? "selected-flex-sider-element" : "flex-sider-element"} >
						Qlikview
				</div>

				<div id="Qliksense" onClick={this.changeCss}  className={this.state.selected == "Qliksense" ? "selected-flex-sider-element" : "flex-sider-element"} >
						Qliksense
				</div>

				
				<div id="Microstrategy" onClick={this.changeCss}  className={this.state.selected == "Microstrategy" ? "selected-flex-sider-element" : "flex-sider-element"} >
						Microstrategy
				</div>

				<div id="Data science" onClick={this.changeCss}  className={this.state.selected == "Data science" ? "selected-flex-sider-element" : "flex-sider-element"} >
						Data science
				</div>

				<div id="BIG Data Hadoop" onClick={this.changeCss}  className={this.state.selected == "BIG Data Hadoop" ? "selected-flex-sider-element" : "flex-sider-element"} >
						BIG Data Hadoop
				</div>

				<div id="Artifical Intelligence" onClick={this.changeCss}  className={this.state.selected == "Artifical Intelligence" ? "selected-flex-sider-element" : "flex-sider-element"} >
						Artifical Intelligence
				</div>

				<div id="R" onClick={this.changeCss}  className={this.state.selected == "R" ? "selected-flex-sider-element" : "flex-sider-element"} >
						R
				</div>

				<div id="Python" onClick={this.changeCss}  className={this.state.selected == "Python" ? "selected-flex-sider-element" : "flex-sider-element"} >
						Python
				</div>

				<div id="Machine learning" onClick={this.changeCss}  className={this.state.selected == "Machine learning" ? "selected-flex-sider-element" : "flex-sider-element"} >
						Machine learning
				</div>

				<div id="SQl,PLSQL" onClick={this.changeCss}  className={this.state.selected == "SQl,PLSQL" ? "selected-flex-sider-element" : "flex-sider-element"} >
						SQl,PLSQL
				</div>

				<div id="Testing (Manual,Automation)" onClick={this.changeCss}  className={this.state.selected == "Testing (Manual,Automation)" ? "selected-flex-sider-element" : "flex-sider-element"} >
						Testing (Manual,Automation)
				</div>

				<div id="Java backend (Struts, Hybernates)" onClick={this.changeCss}  className={this.state.selected == "Java backend (Struts, Hybernates)" ? "selected-flex-sider-element" : "flex-sider-element"} >
						Java backend (Struts, Hybernates)
				</div>

				<div id="CCNA,CCNP,CCIE" onClick={this.changeCss}  className={this.state.selected == "CCNA,CCNP,CCIE" ? "selected-flex-sider-element" : "flex-sider-element"} >
						CCNA,CCNP,CCIE
				</div>

				<div id="Linux,shell scripting" onClick={this.changeCss}  className={this.state.selected == "Linux,shell scripting" ? "selected-flex-sider-element" : "flex-sider-element"} >
						Linux,shell scripting
				</div>
			</div>

			)
		}
	}


export default Sider;
