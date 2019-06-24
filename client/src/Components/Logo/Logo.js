import React from 'react';
import {Icon} from 'antd';
import {Link} from 'react-router-dom';
import './logo.css';
import { connect } from 'react-redux';
import {setLogout} from './Actions';

const mapStateToProps= (state)=> {
	return {
		login : state.LoginReducers.login,
	}
}

const mapDispatchToProps = (Dispatch)=>{
	return{
		setLogout : ()=>{
			Dispatch(setLogout())
		}
	}
}

var image =require('./logo.jpg');

class Logo extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
				<div>
			 	
					<div className="header">
							
								<div className = "icon-parent" >
									<img className="imground" style={{width:"50px" , height: "50px"}} title="27TEKMASTERS" src={image}></img>
								</div>
								
				
								<div className="icon">
									
									<a href= { `https://www.linkedin.com/in/27tekmasters`} target="_blank">	<Icon type="linkedin" /> </a>
									<a href="https://www.facebook.com/techmaster.s.5" target="_blank"> <Icon type="facebook" /> </a>
								    <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=27tekmasters@gmail.com&su=SUBJECT&body=BODY&tf=1" target="_blank">	<Icon type="google" /> </a>
									<Link to="/Adminlogin"> {this.props.login === true ? <Icon type="logout" onClick={this.props.setLogout} />: <Icon type="login" /> } </Link>
								</div>
											
						
					</div>
			
				</div>


			)
	}

}

export default connect(mapStateToProps,mapDispatchToProps)(Logo);