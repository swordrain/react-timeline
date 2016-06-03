import React, {Component} from 'react';
import $ from 'jquery';
import StatusComponent from './StatusComponent';
import StatusCombiner from './StatusCombiner';
import {Constant} from './TimelineConstants';

const styles = {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	margin: 10,
	padding: 10
}
export default class StatusBar extends Component {
	componentDidMount() { //加载完后调整，这段如果放在StatusComponent中会发现调了7*7=49次
	      $(".status-title").each(function(index, item){
	      	$(item).css('transform', 'translateX(-' + ($(item).width() - 2 *(Constant.StatusCircle.radius+Constant.StatusCircle.borderWidth))/2+'px)');
	      	console.log($(item));
	      });
	}


	render() {
		var content = [];
		this.props.data.map((item, index) => {
			if(index !== this.props.data.length -1){
				content.push(<StatusComponent title={item.title} status={item.status}/>);
				content.push(<StatusCombiner completed={this.props.data[index+1].status!==Constant.Status.NOTCOMPLETED}/>);
			}else{
				content.push(<StatusComponent title={item.title} status={item.status}/>);
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