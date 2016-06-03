import React, {Component} from 'react';
import $ from 'jquery';

const styles = {
	completed:{
		flex: 1,
		height: 3,
		backgroundColor: '#00B0F0'
	},
	notCompleted: {
		flex: 1,
		height: 3,
		backgroundColor: '#D9D9D9'
	}
}
export default class StatusCombiner extends Component {

	render() {
		return (
			<div style={this.props.completed?styles.completed:styles.notCompleted} />
			)
	}


}