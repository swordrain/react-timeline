import React, {Component} from 'react';
import $ from 'jquery';
import Header from './Header';
import StatusBar from './StatusBar';

const styles = {
	minWidth: 200,
	minHeight: 100,
	width: '100%',	
}

export default class Timeline extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (<div style={styles}>
				<Header title={this.props.title} />
				<StatusBar data={this.props.data} />
			</div>);
	}
}