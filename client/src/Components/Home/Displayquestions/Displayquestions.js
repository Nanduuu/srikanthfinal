import React from 'react';
import {connect} from 'react-redux';
import { Drawer, Button } from 'antd';  
import { Pagination } from 'antd';
import './Displayquestions.css';
import CustomCollapse from './CustomCollapse'



const mapStateToProps = (state)=>{

	return {
		questions : state.TechnologyReducer.questions

	}
	

}

const mapDispatchToProps = (Dispatch)=>{
	return {
		
	}

}

class Displayquestions extends  React.Component{

	constructor(props){
		super(props)
		this.state = {
		    expandIconPosition: 'right',
		  };

	}


	display = (questions)=>{

		console.log(questions)

	 return	questions.map((question)=>{
			return (<CustomCollapse data = {question} /> )
		})
	}

  
  render() {

  		 const { expandIconPosition } = this.state;

      return (
        <div className="border1" style={{borderWidth : '0px'}}>

        				<Pagination defaultCurrent={1} total={this.props.questions.length} />
        				<div className = "display-questions">
        						{ this.props.questions.length != 0 ? this.display(this.props.questions) : <p> No Questions </p> }
        				</div>
					    <Pagination defaultCurrent={1} total={this.props.questions.length} />	

        </div>);
    }
	
	
}

export default connect (mapStateToProps, mapDispatchToProps) (Displayquestions);


