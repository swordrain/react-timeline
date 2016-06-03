import React, {Component} from 'react';
import $ from 'jquery';
import DetailItem from './DetailItem';

const styles = {
	backgroundColor: '#F2F2F2',
	padding: 20,
	//margin: 10,
	display: 'none'
};

export default class DetailPanel extends Component {

	shouldComponentUpdate(nextProps, nextState){
		if(nextProps.currentShowingDetailPanel){
			return true;
		}else{
			$('.detail-panel').slideUp();
			return false;
		}
	}

	componentWillUpdate() {
		$('.detail-panel').slideUp();
	}

	componentDidUpdate() {
		if($('.detail-panel').length > 0){
			$('.detail-panel').slideDown();
		}
	}
	

	render() {
		console.log(this.props);
		if(this.props.currentShowingDetailPanel === null || this.props.currentShowingDetailPanel === undefined){
			return null;
		}else{
			return (
				<div className="detail-panel" style={styles}> 
					{
						this.props.data.map((item, index)=>{
							return <DetailItem data={item} />
						})
					}
				</div>
			)
		}
	}

}