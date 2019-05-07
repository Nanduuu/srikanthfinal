import React from 'react';
import {Media} from 'react-bootstrap';
import {Button} from 'antd';
import { Icon, Tooltip, Avatar,Input,List,Form } from 'antd';
import moment from 'moment';
import {Comment} from 'antd';


var  Question = require('./question.jpg') ;
var Answer = require('./answer.png');
const TextArea = Input.TextArea;

const CommentList = ({actions, comments }) => (
  <List
  	dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={ (props) =>{
	console.log (props)
		return (<Comment  actions={actions} {...props} />)} }
  />
);

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
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: <p>{"Cyber Arc"}</p>,
            datetime: moment().fromNow(),
          },{
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: <p>{"Trending technology"}</p>,
            datetime: moment().fromNow(),
          },],
		    submitting: false,
		    value: '',
		    likes: 0,
		    dislikes: 0,
		    action: null,
				}
	}

	like = () => {
    this.setState({
      likes: 1,
      dislikes: 0,
      action: 'liked',
    });
  }

  dislike = () => {
    this.setState({
      likes: 0,
      dislikes: 1,
      action: 'disliked',
    });
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
          {
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow(),
          },
          ...this.state.comments,
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
		const { comments, submitting, value } = this.state;

		const { likes, dislikes, action } = this.state;

    const actions = [
      <span>
        <Tooltip title="Like">
          <Icon
            type="like"
            theme={action === 'liked' ? 'filled' : 'outlined'}
            onClick={this.like}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>
          {likes}
        </span>
      </span>,
      <span>
        <Tooltip title="Dislike">
          <Icon
            type="dislike"
            theme={action === 'disliked' ? 'filled' : 'outlined'}
            onClick={this.dislike}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>
          {dislikes}
        </span>
      </span>,
      <span>Reply to</span>,
    ];

		return(
			<div style={{padding:"15px",backgroundColor:"#737e8e"}}>
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
						    {comments.length > 0 && <CommentList actions={actions} comments={comments} />}
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
					              submitting={submitting}
					              value={value}
					            />
					          )}
					          datetime={(
						          <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
						            <span>{moment().fromNow()}</span>
						          </Tooltip>
						        )}
					        />
						    
						  </Media.Body>
				</Media>;


			</div>
			)
	}

}

export default Dispalyqa;

