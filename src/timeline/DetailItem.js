import React, {Component} from 'react';
import $ from 'jquery';


const styles = {
	container: {
		margin: 10
	},
	title: {
		float: 'left',
	},
	statics: {
		float: 'right'
	},
	progressTotal: {
		backgroundColor: '#BFBFBF',
		height: 20
	},
	progressComplete: {
		backgroundColor: '#00B0F0',
		height: '100%'
	}
}
export default class DetailItems extends Component {


	render() {
		var width = 100*this.props.data.completedAmout/this.props.data.totleAmount + '%';
		styles.progressComplete.width = width;
		return <div style={styles.container}>
			<div>
				<span style={styles.title}>{this.props.data.title}</span>
				<span style={styles.statics}>{this.props.data.completedAmout}/{this.props.data.totleAmount} {this.props.data.unit}</span>
			</div>
			<div style={{clear:'both'}}></div>
			<div style={styles.progressTotal}>
				<div style={styles.progressComplete}></div>
			</div>

		</div>
	}
}