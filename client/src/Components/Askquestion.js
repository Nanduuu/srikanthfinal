import React from 'react';
import {Button,Input} from 'antd';
import {Col,Row} from 'antd';
import './Askquestion.css';

const Search = Input.Search;


class Askquestion extends React.Component{
	constructor(props){
		super(props);

		this.state={
			displayAskQuestion : false,
		}
	}

	askQuestionToggle = ()=>{
		this.setState({
			displayAskQuestion : !this.state.displayAskQuestion,
		})
	}

	render(){
		return(
				<div>
					<h3 style={{color:"white"}}>{"Welcome to 27tekmasters!"} </h3>
					
					<button  className = "askButton" type="primary" onClick={ this.askQuestionToggle }> {this.state.displayAskQuestion ? "Close" : "Ask Question !"} </button>
					<div style={{display: this.state.displayAskQuestion ? "block" : "none"}}>
							<p style={{color:"white"}}>We’d love to help you, but the reality is that not every question gets answered. To improve your chances, here are some tips:</p>
							<h5 style={{color:"white"}}>Search, and research </h5> 
							<p style={{color:"white"}}>Have you thoroughly searched for an answer before asking your question? Sharing your research helps everyone. Tell us what you found (on this site or elsewhere) and why it didn’t meet your needs. This demonstrates that you’ve taken the time to try to help yourself, it saves us from reiterating obvious answers, and above all, it helps you get a more specific and relevant answer!</p>
							<div className="question-div">
								<Row>
									<Col xs={20} sm={22} md={20} lg={20} xl={20} >
										<Input className = "input" placeholder="Enter your question" />
										
									</Col>
									<Col xs={4} sm={2} md={4} lg={4} xl={4}  >
										<Button type="primary" className = "button"> Post </Button>
									</Col>
								</Row>
							</div>
					</div>
					<div className={this.state.displayAskQuestion ? "search-hide" : "search-display"}>
                             <Search
                                 placeholder="input search text"
                                 onSearch={value => console.log(value)}
                                 enterButton
                              />

                    </div>
					

					


				</div>

			)
	}

}


export default Askquestion;