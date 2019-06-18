import React from 'react';
import {connect} from 'react-redux';
import { Drawer, Button } from 'antd';  
import { Pagination } from 'antd';
import './Displayquestions.css';
import Displayqa from '../Displayqa';

import { Collapse, Icon, Select } from 'antd';

const { Panel } = Collapse;
const { Option } = Select;


const mapStateToProps = (state)=>{

	return {
		
	}
	

}

const mapDispatchToProps = (Dispatch)=>{
	return {
		
	}

}

class CustomCollapse extends  React.Component{

	constructor(props){
		super(props)
		this.state = {
		    expandIconPosition: 'right',
		  };

	}


	
  
  render() {

  		 const { expandIconPosition } = this.state;

      return (
        <div >

        				<Collapse>
					          <Panel header= { this.props.data.question} >
					            <div>
					            	<Displayqa data = {this.props.data}/>
					            </div>
					          </Panel>
					     </Collapse>
					    
        </div>);
    }
	
	
}

export default connect (mapStateToProps, mapDispatchToProps) (CustomCollapse);


