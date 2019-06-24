import Frame from './Components/Frame';
import Logo from './Components/Logo/Logo';
import {Switch, Route, } from 'react-router';
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import WebFont from 'webfontloader';
import Adminlogin from './Components/Adminlogin/Adminlogin';
import Application from './Components/Application/Application';


const fontStyle = {

  fontFamily : " 'Titillium Web','Chinese Quote'",
  
  height:"100%"
}

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif']
  }
});


class App extends Component {
  render() {
    return (
        
        <div className="App" style={fontStyle}>

          <Switch>

              <Route path='/adminlogin' component={Adminlogin}/>
              <Route  path="/" component={Application} />
              
 
  
         </Switch>
            
      
        </div>
      
    );
  }
}


export default App;
