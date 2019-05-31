import React from 'react';
import {Media} from 'react-bootstrap';
import {Button} from 'antd';
import { Icon, Tooltip, Avatar,Input,List,Form } from 'antd';
import moment from 'moment';
import {Comment} from 'antd';
import ShowMore from 'react-show-more';
import ComponentRender from './CommentRender'


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


class Dispalyqa extends React.Component{
	constructor(props){
		super(props);
		this.state={
			comments: [{
                   content:  <p>{"Cyber Arc"}</p> ,
                   likes: 1,
                   dislikes : 0,
                   datetime: "2019-01-06"
                 },{
                   content: <p>{"Trending technology"}</p>,
                   likes: 1,
                   dislikes : 0,
                   datetime: '2019-05-10'
                },],

		    submitting: false,
		    value: '',
	
				}
	}


	handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

	setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        comments: [

          ...this.state.comments,

          {
            content: <p>{this.state.value}</p>,
            likes : 0,
            dislikes : 0,
            datetime : moment(),
          },
          
        ],
      });
    }, 1000);
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  }


	render(){
		   
		return(

			<div style={{padding:"15px",backgroundColor:"white"}}>
				<Media>
					<img
					    width={50}
					    height={50}
					    className="mr-3"
					    src={Question}
					    alt="Generic placeholder"
					  />
						<Media.Body>
						    <h5 >What is CyberArc</h5>

						      {this.state.comments.map((item)=>{


                      console.log(item)

                     return (  <ComponentRender datetime = {item.datetime} likes={ item.likes } dislikes = { item.dislikes} content={item.content}/> )

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
						    
						  </Media.Body>
				</Media>


			</div>

    
			)
	}

}

export default Dispalyqa;

