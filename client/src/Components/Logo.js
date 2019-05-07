import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import {Icon} from 'antd';
import './logo.css';

var image =require('./logo.jpg');

class Logo extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
				<div>
				<Container fluid>
					<Row className="header">
							<Col xs={5} sm={4} md={3} lg={2} xl={2}>
								<div  >
									<img className="imground" style={{width:"100%",}} title="27TEKMASTERS" src={image}></img>
								</div>
							</Col>		
							<Col xs={19} sm={20} md={21} lg={22} xl={22} >
							<div className="icon-parent">
								<div className="icon">
									<a href= { `https://www.linkedin.com/in/27tekmasters`} target="_blank">	<Icon type="linkedin" /> </a>
									<a href="https://www.facebook.com/techmaster.s.5" target="_blank"> <Icon type="facebook" /> </a>
								    <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=27tekmasters@gmail.com&su=SUBJECT&body=BODY&tf=1" target="_blank">	<Icon type="google" /> </a>
								</div>
							</div>
							</Col>	
					</Row>
				</Container>
				</div>


			)
	}

}

export default Logo;