import React from 'react';
import { Row, Col } from 'antd';
import {Icon} from 'antd';



class Contactus extends React.Component{


	render(){
		return(
					<div style={{textAlign:"center", padding:"10px"}}>	
							<div style={{height:'100px', margin:"0px 0px 0px 0px"}}>
                             <h1 style={{ color: 'black' }}>Contact Information</h1>
                            </div>
                             
                             <Row  >
                             <Col xl={12} >
                             	<h2 style={{ color: 'black' }}> We would love to help and work with you</h2>
                             	<p style={{ color: 'black',fontSize:"16px" }}> Please give us few details about your next project and we ll get back to you soon </p>

                             	<h2 style={{ color: 'black' }}>Your Privacy</h2>
                             <p style={{ color: 'black',fontSize:"16px" }}> Your information will not be shared with any 3rd parties under any circumstances.</p>

                             </Col>
                             <Col xl={12} >
                            
                              <h2 style={{ color: 'black' }}> What you get</h2>
                             	<div >
								<p style={{ color: 'black' ,fontSize:"16px"}}><Icon type="plus-circle" style={{ fontSize: 16, color: 'white' }}/> A cost estimate for your project.</p>
								<p style={{ color: 'black' ,fontSize:"16px" }}><Icon type="plus-circle" style={{ fontSize: 16, color: 'white' }}/> An in person meeting if needed.</p>
								<p style={{ color: 'black' ,fontSize:"16px"}}><Icon type="plus-circle" style={{ fontSize: 16, color: 'white' }}/> The meeting over  phone|Skype.</p>
								</div>
                             </Col>
                             </Row>
                             
                             

                      </div>

			);
	}



}

export default Contactus;