import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Radio, Icon } from 'antd';
import { Row, Col } from 'antd';
import Submit from './Submit';
import {Route , Switch} from 'react-router';
import { Link } from 'react-router-dom';
import { Jumbotron,} from 'reactstrap';
import { Input, Button} from 'antd';
import { Modal,Popover } from 'antd';
import SubmitForm from './SubmitForm';
import Sider from './Sider/Sider';
import HideSider from './Sider/HideSider'
import Askquestion from './AskQuestion/Askquestion';
import Displayqa from './Displayqa';
import Displayquestions from './Displayquestions/Displayquestions'
import './Home.css';


const Sidebar = Layout.Sider;
const { Header, Content, Footer } = Layout;

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
                               	<Col onClick={this.showModal} className="mega" xl={12} sm={12} md={12} style={{padding:"10px"}} >
                                 	 Are you looking for Training ?
                                </Col>
                               	<Col onClick={this.showModal} className="mega" xl={12} sm={12} md={12} style={{padding:"10px"}} >
                                    Are you looking for Job Support ?
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
