import React from 'react';
import Sider from './Sider';
import { Drawer, Button } from 'antd';


  


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
      <div>
        <Button type="primary" onClick={this.showDrawer}>
          Technologies
        </Button>
        <Drawer
          title="Technologies"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Sider/>
        </Drawer>
      </div>
    );
  }
	
	
	}


export default HideSider;
