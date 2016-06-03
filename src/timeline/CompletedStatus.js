import React, {Component} from 'react';
import $ from 'jquery';
import {Constant} from './TimelineConstants';

const styles = {
	width: Constant.StatusCircle.radius * 2,
	height: Constant.StatusCircle.radius * 2,
	borderRadius: Constant.StatusCircle.radius * 2,
	boxShadow: '0px 0px 5px #C8C8C8',
	borderWidth: 5,
	borderStyle: 'solid',
	borderColor: 'rgb(0,176,250)',
	backgroundColor: '#00AAE6'
};

export default class CompletedStatus extends Component {



	render(){
		return (
			<div style={styles}>

			</div>
			)
	}

}