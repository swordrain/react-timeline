import React, {Component} from 'react';
import $ from 'jquery';
import StatusComponent from './StatusComponent';
import StatusCombiner from './StatusCombiner';
import {Constant} from './TimelineConstants';

const styles = {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	marginLeft: 20,
	marginRight: 20,
	marginTop: 10,
	marginBottom: 10
}
export default class StatusBar extends Component {



	render() {
		var content = [];
		this.props.data.map((item, index) => {
			if(index !== this.props.data.length -1){
				content.push(<StatusComponent title={item.title} status={item.status}/>);
				content.push(<StatusCombiner completed={this.props.data[index+1].status!==Constant.Status.NOTCOMPLETED}/>);
			}else{
				content.push(<StatusComponent />);
			}
		});
		return (
			<div style={styles}>
				{
					content.map((item)=>{
						return item;
					})
				}
				
			</div>	
			)
	}
}