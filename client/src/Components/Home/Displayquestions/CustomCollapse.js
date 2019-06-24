import React from 'react';
import {connect} from 'react-redux';
import { Drawer, Button } from 'antd';  
import { Pagination } from 'antd';
import './Displayquestions.css';
import Displayqa from '../Displayqa';
import './CustomCollapse.css';
import axios from 'axios';
import { Collapse, Icon, Select ,message} from 'antd';
import {setTechnology} from '../AskQuestion/Actions'

const { Panel } = Collapse;
const { Option } = Select;

const success = (text)=>{
	message.success(text);

}
const error = (text)=>{
	message.error(text);
}

const mapStateToProps = (state)=>{

	return {
		login : state.LoginReducers.login,
		tech_num : state.TechnologyReducer.tech_num,
	}
	

}

const mapDispatchToProps = (Dispatch)=>{
	return {
			setTechnology : (data)=>{
				Dispatch(setTechnology(data))
			}
	}

}

class CustomCollapse extends  React.Component{

	constructor(props){
		super(props)
		this.state = {
		    expandIconPosition: 'right',
		  };

	}

	delete = ()=>{

		let data = 	{
						ques_num : this.props.data.ques_num,
						tech_num : this.props.data.tech_num,
					}

					console.log(data)

		axios.post('/api/deleteQuestion/', data).then( function (res){

			console.log(res)
			if(res){
				success("Question Deleted .....!");
				this.props.setTechnology({tech_num:this.props.tech_num})
			}else{
				error("Issue with Database")
			}

			}.bind(this)).catch( function(err){

				console.log(err)
				error("Issue with Database")
			});

	}
	
  
  render() {

  		 const { expandIconPosition } = this.state;

      return (
        <div >

        				<Collapse>
					          <Panel header= { this.props.data.question} >
					            <div>
									<Displayqa data = {this.props.data}/>
									{this.props.login ?<Icon type="delete" onClick={this.delete} className="delete"/> : null }
					            </div>
					          </Panel>
					     </Collapse>
					    
        </div>);
    }
	
	
}

export default connect (mapStateToProps, mapDispatchToProps) (CustomCollapse);


