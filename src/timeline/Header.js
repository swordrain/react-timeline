import React, {Component} from 'react';

const styles = {
	textAlign: 'center',
	color: '#009DE0'
}

export default class Header extends Component {
	render() {
		return <h1 style={styles}>{this.props.title}</h1>;
	}
}