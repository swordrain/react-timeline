import React, {Component} from 'react';
import $ from 'jquery';
import StatusComponent from './StatusComponent';
import StatusCombiner from './StatusCombiner';
import {Constant} from './TimelineConstants';

const styles = {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	margin: 10
}
export default class StatusBar extends Component {



	render() {
		return (
			<div style={styles}>
				
				<StatusComponent  status={Constant.Status.HALFCOMPLETED} />
				<StatusCombiner />
				<StatusComponent  status={Constant.Status.HALFCOMPLETED} />
				<StatusCombiner />
				<StatusComponent  status={Constant.Status.HALFCOMPLETED} />

			</div>	
			)
	}
}