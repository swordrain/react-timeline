import React, {Component} from 'react';
import $ from 'jquery';
import {Constant} from './TimelineConstants';
import CompletedStatus from './CompletedStatus';
import NotCompletedStatus from './NotCompletedStatus';
import HalfCompletedStatus from './HalfCompletedStatus';

const styles = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center'
}

export default class StatusComponent extends Component {


	render() {
		var status;
		switch(this.props.status){
			case Constant.Status.COMPLETED: 
				status = <CompletedStatus />;
				break;
			case Constant.Status.HALFCOMPLETED: 
				status = <HalfCompletedStatus />;
				break;
			case Constant.Status.NOTCOMPLETED:
				status = <NotCompletedStatus />;
				break;
			default:
				status = <NotCompletedStatus />;
		}


		return (
				<div style={styles}>
				{status}
				</div>

		);
	}
}