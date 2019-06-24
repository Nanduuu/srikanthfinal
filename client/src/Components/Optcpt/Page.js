import React from 'react';
import { Card } from 'antd';

import 'antd/dist/antd.css';




class Page extends React.Component{
	constructor(props){
		super(props);
		this.state = {}
	}

	render(){

		return(
					<div style={{margin:"1%"}}>

						<Card hoverable="true" 
						    title={this.props.header}
						    style={{ width: "100%"}}
						    headStyle={{fontSize:"15px",backgroundColor:"#35383d",color:"white"}}
						  >
						  <p style={{color:"black",fontSize:"15px"}}> {this.props.body}</p>

						  </Card>
						  
					</div>
			)
	}

}

export default Page;