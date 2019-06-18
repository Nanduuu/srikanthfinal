import React from 'react';
import { Comment, Icon, Tooltip, Avatar,message} from 'antd';
import moment from 'moment';
import axios from 'axios';

const success = (text)=>{
  message.success(text);

}
const error = (text)=>{
  message.error(text);
}

class CommentRender extends React.Component {

  constructor(props){
    super(props)
      this.state = {
            likes: 0,
            dislikes: 0,
            action: null,
            content : null,
            datetime : moment(),
      }

   } 
  
  componentWillMount () {

    this.setState({
      likes : this.props.likes,
      dislikes : this.props.dislikes,
      content : this.props.content,
      datetime : this.props.datetime,
      ans_num :this.props.ans_num,
    })

  }

  updateAnswer = ()=>{

                 var data = {

                   ans_num:this.state.ans_num,
                   likes:this.state.likes,
                   dislikes:this.state.dislikes,

                 }

                axios.post('/api/postLikeDislike/', data).then( function (res){

                      console.log(res)
                      if(res){
                        
                        
                      }else{
                        error("Issue with Database")
                      }

                  }.bind(this)).catch( function(err){

                    console.log(err)
                    error("Issue with Database")
                  });
              }
  

  like = () => {
    this.setState({
      likes: this.state.likes + 1,
       action: 'liked',
    });
    this.updateAnswer();
  }

  dislike = () => {

    this.setState({
       dislikes: this.state.dislikes + 1,
      action: 'disliked',
    });

    this.updateAnswer();
  }

  render() {
    const { likes, dislikes, action ,datetime} = this.state;

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
      
    ];

    return (
      <Comment
        actions={actions}
        avatar={(
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Unknown"
          />
        )}
        content={ this.state.content}
        datetime={(
          <Tooltip title={moment().format('2019-05-10 12:00:00')}>
            <span>{moment(datetime).fromNow()}</span>
          </Tooltip>
        )}
      />
    );
  }
}

export default CommentRender;