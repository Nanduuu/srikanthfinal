import React from 'react';
import { Row, Col } from 'antd';
import { Button} from 'antd';
import { Modal, } from 'antd';
import SubmitForm from './SubmitForm';
import Sider from './Sider/Sider';
import HideSider from './Sider/HideSider'
import Askquestion from './AskQuestion/Askquestion';
import Displayquestions from './Displayquestions/Displayquestions'
import './Home.css';


class Home extends React.Component{
  constructor(props){
        super(props);
          this.state = { 
              visible: false,
              tech_num : 1,
             
          }
  }

  showModal = () => {
    this.setState({
        visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
        visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  tech_num = (num)=>{
      this.setState({
        tech_num : num + 1
      })
  }

  ComponentDidMount(){
    alert("Component Did mount");
    console.log("Component Did mount");
  }

	render(){
		return(
					     <div>                             
                             <div className="submit">
                               <Row >
                               	<Col xl={12} sm={12} md={12}  >
                                 	<div onClick={this.showModal} type="primary"> Are you looking for Training ? </div>
                                </Col>
                               	<Col  xl={12} sm={12} md={12} style={{padding:"ppx 10px"}} >
                                 <div onClick={this.showModal} type="primary"> Are you looking for Job Support ? </div>
  								              </Col>
  							               </Row>
                             </div>

                             <Modal
                                  title="Please enter your details :"
                                  visible={this.state.visible}
                                  onOk={this.handleOk}
                                  onCancel={this.handleCancel}
                                  okType={"primary"}
                                  closable={false}
                             >
                                    <SubmitForm />
                             </Modal>
                             <div className="hide-menu">
                                  <HideSider tech_num = {this.tech_num}/>
                             </div>
                             
                              <div className="flex-container">
                                       <div className="flex-element1">
                                            <Sider tech_num = {this.tech_num}/>
                                       </div>
                                       <div className="flex-element2">
                                            <Askquestion tech_num = { this.state.tech_num }/>
                                            <Displayquestions/>
                  
                                       </div>
                             </div>
               </div>
			);
  	}
}
export default Home;
