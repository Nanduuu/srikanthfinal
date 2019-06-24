import React from 'react';
import {  Icon } from 'antd';
import {Route , Switch,Redirect} from 'react-router';
import { Link } from 'react-router-dom';
import Home from "./Home/Home.js";
import Why27k from "./Why27tek/Why27k";
import Testimonials from "./Testimonials/Testimonials";
import Contactus from "./Contactus/Contactus";
import Optcpt from "./Optcpt/Optcpt";
import DailySenarios from "./Dailysenarios/DailySenarios";
import './Navigationbar.css';


import Media from "react-media";
import Login from "./Login";

const fontStyle ={

  fontfamily : "Helvetica Neue",
  color: "black",
 
};

const mapStateToProps = (state) => {
  return {login : state.login};
};

class Frame extends React.Component{
	constructor(props){
		super(props);
    this.state = {
    collapsed: false,
    visible: false,
    Optcpt:"primary",
    DailySenarios:"primary",
    redirect:false,
    menu_selected : "home",
    };
	}

  hide = () => {
    this.setState({
      visible: false,
    });
  }

  handleVisibleChange = (visible) => {
    this.setState({ visible });
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });}

  OptcptButton=()=>{
    this.setState({Optcpt:"danger",DailySenarios:"primary"})
  }
  DailySenarios=()=>{
    this.setState({Optcpt:"primary",DailySenarios:"danger"})
  }
  componentWillMount(){

    if(this.props.login == "loggedin"){
      this.setState({redirect:false})
    }
    
  }
  LoginRedirect = ()=>{
    if (this.state.redirect) {
      return <Redirect to='/Login' />
    }
  }
  setRedirect=()=>{
    if(this.props.login == "notloggedin"){
    this.setState({redirect:true})
  }
  }

  componentDidMount(){
    console.log(this.props.path);
     this.setState({
       menu_selected : this.props.path,
     })
  }

  componentWillReceiveProps=(nextprops)=>{
    if(nextprops.path != this.props.path){
      this.setState({
        menu_selected :nextprops.path
      })
    }
  }
	render(){

      var selected = this.state.menu_selected;

			return(
				<div style={fontStyle}>
  			
           <div className="navigationbar">
                <ul>
                  <li  className={selected === "/" ?'selected' : null  } >
                  <Link class="link" to = {"/"} >
                  <Media query="(min-width: 720px)">
                    {matches =>
                      matches ? (
                      <span>Home</span>
                      ) : (
                      <Icon type="home" theme="outlined" />
                      )
                    }
                    </Media>

                    </Link>
                 </li>
                     
                  <li className={selected === '/Why27k' ?'selected' : null  }>
                  <Link class="link"  to = {'/Why27k'}>
                  <Media query="(min-width: 720px)">
                    {matches =>
                      matches ? (
                      <span>Why 27Tek</span>
                      ) : (
                      <Icon type="question" theme="outlined" />
                      )
                    }
                    </Media>

                     </Link>
                    </li>
              
              
                    <li className={selected === "/Testimonials" ?'selected' : null  }>
                    <Link class="link" to = {"/Testimonials"} >
                <Media query="(min-width: 720px)">
                    {matches =>
                      matches ? (
                      <span>Testimonials</span>
                      ) : (
                      <Icon type="database" theme="outlined" />
                      )
                    }
                    </Media>
                </Link>
                
                    </li>
                    <li className={selected === "/DailySenarios" ?'selected' : null  }>
                    <Link class="link" to ={"/DailySenarios"}>
                <Media query="(min-width: 720px)">
                    {matches =>
                      matches ? (
                      <span>DailySenarios </span>
                      ) : (
                      <Icon type="database" theme="outlined" />
                      )
                    }
                    </Media>
                </Link>
                    </li>

                    <li className={selected === "/Contactus" ?'selected' : null  }>
                    <Link class="link" to = {"/Contactus"}>
                    <Media query="(min-width: 720px)">
                    {matches =>
                      matches ? (
                      <span> Contact us</span>
                      ) : (
                      <Icon type="team" theme="outlined" />
                      )
                    }
                    </Media>

                </Link>
                </li>
                </ul>
               </div> 
        		
    				
      
               
             
              
                  <div style={{padding:"0px"}} >
                      
                        <Switch>
                          <Route exact path= {"/"} component={Home}/>                                                           
                          <Route path= {'/Why27k' } component={Why27k}/>
                          <Route path= {'/Testimonials' } component={Testimonials}/>
                          <Route path= {'/Contactus' } component={Contactus}/>
                          <Route path= {'/Optcpt' } component={Optcpt}/>
                          <Route path= {'/DailySenarios' } component={DailySenarios}/>
                          <Route path={'/Login'} component={Login}/>
                          
                          
                        </Switch>
                  </div>
             
            
            
          
				</div>
				);
	}


}



export default Frame;