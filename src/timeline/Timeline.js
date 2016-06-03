import React, {Component} from 'react';
import $ from 'jquery';
import Header from './Header';
import StatusBar from './StatusBar';
import DetailPanel from './DetailPanel';

const styles = {
	minWidth: 200,
	minHeight: 100,
	width: '100%',	
}

export default class Timeline extends Component {

	constructor(props){
		super(props);
		this.state = {
			currentShowingDetailPanel : null,
			detailPanelData : []
		}
	}

	_showDetailPanel(index) {
		if(index === this.state.currentShowingDetailPanel){
			this.setState({
				currentShowingDetailPanel: null,
				detailPanelData: []
			});
		}else{
			this.setState({
				currentShowingDetailPanel: index,
				detailPanelData: this.props.data[index].subItems
			});
		}
		console.log(this.state);
	}

	render() {
		return (<div style={styles}>
				<Header title={this.props.title} />
				<StatusBar currentShowingDetailPanel={this.state.currentShowingDetailPanel} data={this.props.data} showDetailPanel= {this._showDetailPanel.bind(this)} />
				<DetailPanel currentShowingDetailPanel={this.state.currentShowingDetailPanel} data={this.state.detailPanelData}/>
			</div>);
	}
}