import React from 'react';

import { Button, Radio, Icon } from 'antd';
import { Row, Col } from 'antd';
import { Carousel } from 'antd';
var image = require('./Whytech.jpg');

const  cstyle = {
  textAlign: 'center',
  height: '160px',
  lineHeight: '160px',
  overflow:' hidden'
  
}

class Why27k extends React.Component{


	render(){
		return(
			<div style={{textAlign:"center"}}>
              
             <Row>
             	<Col xl={24} sm={24} md={24}>
                  <h1 style={{color:"white",marginTop:"50px"}}> Why 27 technologies??</h1>
               		<img style={{width:"100%"}} src={image}></img> 
               </Col> 
             </Row>      
          	</div>

			);
	}



}

export default Why27k;


/* <Carousel autoplay >
   						 	 <div style={cstyle}><h3>Will give you real time training with own test machines</h3></div>
								 <div style={cstyle}><h3>Will give you knowledge, How the actual work is happening in IT world</h3></div>
								 <div style={cstyle}><h3> Every day task will give you by trainer</h3></div>
					   	</Carousel>
*/