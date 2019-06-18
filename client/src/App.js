import Frame from './Components/Frame';
import Logo from './Components/Logo/Logo';

import React, { Component } from 'react';

import 'antd/dist/antd.css';
import './App.css';
import WebFont from 'webfontloader';


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
          <Logo/>
          <Frame/> 
        </div>
      
    );
  }
}


export default App;
