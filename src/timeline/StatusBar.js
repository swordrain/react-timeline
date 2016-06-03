import React, {Component} from 'react';
import $ from 'jquery';
import StatusComponent from './StatusComponent';
import StatusCombiner from './StatusCombiner';
import {Constant} from './TimelineConstants';

const styles = {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	marginTop: 10,
	marginLeft: 10,
	marginRight: 10,
	paddingTop: 10,
	paddingLeft: 10,
	paddingRight: 10,
	paddingBottom: 10,
	marginBottom: 5,
	position: 'relative'
}
const triangle = {
	width: 0,
	height: 0,
	borderBottom: '10px solid #F2F2F2',
	borderLeft: '10px solid transparent',
	borderRight: '10px solid transparent',
	position: 'absolute',
	bottom: -5,
	display: 'none'
}
export default class StatusBar extends Component {
	componentDidMount() { //加载完后调整，这段如果放在StatusComponent中会发现调了7*7=49次
	      $(".status-title").each(function(index, item){
	      	$(item).css('transform', 'translateX(-' + ($(item).width() - 2 *(Constant.StatusCircle.radius+Constant.StatusCircle.borderWidth))/2+'px)');
	      	console.log($(item));
	      });
	}

	_showDetailPanel(status, index) {
		console.log(status);
		if(status !== Constant.Status.COMPLETED){
			if(this.props.currentShowingDetailPanel === null){
				//显示三角
				$(".triangle-indicator").show();
				var component = $(".status-component").get(index);
				var $component = $(component);
				$(".triangle-indicator").offset({left: $component.offset().left + 9}); //9是通过调试出来的

			}else if(index === this.props.currentShowingDetailPanel){
				//隐藏三角
				$(".triangle-indicator").hide();
			}else{
				//移动三角
				var component = $(".status-component").get(index);
				var $component = $(component);
				//$(".triangle-indicator").offset({left: $component.offset().left + 9});
				var offset = $component.offset().left + 9 - $(".triangle-indicator").offset().left;
				$(".triangle-indicator").animate({
					left: '+=' + offset
				}, 1000);
			}

			this.props.showDetailPanel(index);
		}
	}


	render() {
		var content = [];
		this.props.data.map((item, index) => {
			if(index !== this.props.data.length -1){
				content.push(<StatusComponent index={index} showDetailPanel={this._showDetailPanel.bind(this, item.status, index)} title={item.title} status={item.status}/>);
				content.push(<StatusCombiner completed={this.props.data[index+1].status!==Constant.Status.NOTCOMPLETED}/>);
			}else{
				content.push(<StatusComponent index={index} showDetailPanel={this._showDetailPanel.bind(this, item.status, index)} title={item.title} status={item.status}/>);
			}
		});
		return (
			<div style={styles}>
				{
					content.map((item)=>{
						return item;
					})
				}
				<div className="triangle-indicator" style={triangle}></div>
			</div>	
			)
	}
}