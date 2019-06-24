import React from 'react';
import Sider from './Sider';
import { Drawer, Button,Icon } from 'antd';
import './HideSider.css';

  


class HideSider extends  React.Component{

	constructor(props){
		super(props)
		this.state = { visible: false };
	}

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div id="border">

        <div className="button" onClick={this.showDrawer}>
        <Icon type="menu-fold" />
        </div>

        <Drawer
          title="Technologies"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Sider tech_num = {this.props.tech_num}  />
        </Drawer>
      </div>
    );
  }
	
	
	}


export default HideSider;
