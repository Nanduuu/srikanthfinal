import React from 'react';
import './Adminlogin.css';
import {Input} from 'antd';
import { Button } from 'antd';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {setLogin} from './Actions';
import {Redirect} from 'react-router-dom';

const mapStateToProps=(state)=>{
  return{
    login : state.LoginReducers.login
  }

}

const mapDispatchToProps=(Dispatch)=>{
  return{
      setLogin : ()=>{
        Dispatch(setLogin());
      } 
  }
}

class Adminlogin extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          Uname:null,
          Psw:null,
        }
    }

    submit = (e)=>{
      e.preventDefault();
      let {Uname,Psw} = this.state
      
      if(Uname && Psw){
        if(Uname === 'Srikanth' && Psw === 'Doordie'){
          console.log(Uname)
          this.props.setLogin();
        }
      }
    }
    UnameChnage = (e)=>{
        this.setState({
          Uname : e.target.value,
        })
    }

    PswChange = (e)=>{
      this.setState({
        Psw:e.target.value,
      })
    }


    render(){
      return(<div>
          {this.props.login === true ? <Redirect to="/"/> : null}
<div id="id01" className="modal">
  
  <form className="modal-content animate" onSubmit={this.submit}>
    <div className="imgcontainer">
       <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="Avatar" className="avatar"/>
    </div>

    <div className="container">
      <label for="uname"><b>Username</b></label>
      <input type="text" onChange = {this.UnameChnage} placeholder="Enter Username" name="uname" required/>

      <label for="psw"><b>Password</b></label>
      <input type="password" onChange={this.PswChange} placeholder="Enter Password" name="psw" required/>
        
      <button type="submit">Login</button>
     
    </div>

    <div className="container" style={{backgroundColor:"#f1f1f1"}}>
      <button type="button"  className="cancelbtn"><Link to="/">Cancel</Link></button>
      <span className="psw">Forgot <a href="#">password?</a></span>
    </div>
  </form>
</div>
        
  </div> )

    }

}

export default connect(mapStateToProps, mapDispatchToProps) (Adminlogin);
