import React from 'react';
import { Row, Col } from 'antd';
import {Icon} from 'antd';
import Page from "./Page"


class DailySenarious extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			isloaded : false,
			items: [],
			error:""
		}
	}
	componentDidMount(){
		
		fetch("/api/dailySenarios/")
		.then(res => res.json())
      	.then(
        	(res) => {
        	
          this.setState({
            isLoaded: true,
            items: res.msg.Sheet1
          });
          
        },
       (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
     	
	}

	render(){
		
		return(
				<div>
					<div style={{margin:"2%"}}>
						{this.state.items.map(function(data,index){

							return <Page  key={index} header={data.A} body={data.B }/>
						})}
		
					</div>
				</div>

			)
	}

}

export default DailySenarious;