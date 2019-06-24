import React, {Component} from 'react';
import Frame from '../Frame';
import Logo from '../Logo/Logo';

class Application extends Component {
    constructor(props){
        super(props);
    }


render(){

    return(
        <div>
            <Logo/>
            <Frame path={this.props.location.pathname}/>
        </div>
    )
}


}

export default Application;