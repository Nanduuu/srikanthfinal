import React from 'react';
import {Media} from 'react-bootstrap';
import {Button} from 'antd';
import { Icon, Tooltip, Avatar,Input,List,Form,message } from 'antd';
import moment from 'moment';
import {Comment} from 'antd';
import ShowMore from 'react-show-more';
import ComponentRender from './CommentRender'
import {connect} from 'react-redux'
import axios from 'axios';

const success = (text)=>{
  message.success(text);

}
const error = (text)=>{
  message.error(text);
}


var  Question = require('./question.jpg') ;
var Answer = require('./answer.png');
const TextArea = Input.TextArea;

const Editor = ({
  onChange, onSubmit, submitting, value,
}) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Add Comment
      </Button>
    </Form.Item>
  </div>
);

const mapStateToProps = (state)=>{

  return {
    
  }
  

}

const mapDispatchToProps = (Dispatch)=>{
  return {

  }

}


class Dispalyqa extends React.Component{
	constructor(props){
		super(props);
		this.state={
			  comments: [ ],
		    submitting: false,
		    value: '',
	
				}
	}

  componentWillMount(){

    this.setState({
       tech_num : this.props.data.tech_num,
       ques_num : this.props.data.ques_num,
     })

  }

  componentDidMount(){

    console.log(this.props)
     this.getAnswers();

  }

	handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

	setTimeout(() => {
      
        const data = {

              ques_num : this.state.ques_num,
              answer :this.state.value,
            }


            if(this.state.value){

                axios.post('/api/postAnswer/', data).then( function (res){

                      console.log(res)
                      if(res){
                        success("Answer posted .....!");
                         setTimeout(()=>{
                              this.getAnswers();
                              this.setState({
                                value:null,
                              })
                         }, 1000);

                      }else{
                        error("Issue with Database")
                      }

                  }.bind(this)).catch( function(err){

                    console.log(err)
                    error("Issue with Database")
                  });
              }else{
                error("Please enter Answer");
              }
              this.setState({
                  submitting: false,
                });

    }, 1000);

  }

  getAnswers = ( )=>{

    this.setState({
      comments: [],
    })

    var data = {
      ques_num : this.state.ques_num,
    }

    axios.post('/api/getAnswers/', data).then( function (res){

                      console.log(res)
                      if(res){
                        
                          this.setState({
                            comments :res.data.answers
                          })

                      }else{
                        error("Issue with Database")
                      }

                  }.bind(this)).catch( function(err){

                    console.log(err)
                    error("Issue with Database")
                  });
              

  }



  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  }


	render(){
		   
		return(

			<div style={{padding:"5px",backgroundColor:"white"}}>
				
						    
						      {this.state.comments.map((item)=>{


                       return (  <ComponentRender ans_num={item.ans_num} datetime = {item.timestamp} likes={ item.likes } dislikes = { item.dislikes} getAnswers={()=>{this.getAnswers()}} content={item.answer}/> )

                  })}

                  
					        <Comment
					          
					          avatar={(
					            <Avatar
					              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
					              alt="Han Solo"
					            />
					          )}
					          content={(
					            <Editor
					              onChange={this.handleChange}
					              onSubmit={this.handleSubmit}
					              submitting={this.state.submitting}
					              value={this.state.value}
					            />
					          )}
					          datetime={(
						          <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
						            <span>{moment().fromNow()}</span>
						          </Tooltip>
						        )}
					        />
			</div>

			)
	}

}

export default connect(mapStateToProps, mapDispatchToProps) (Dispalyqa);

