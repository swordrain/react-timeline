import React, {Component} from 'react';
import $ from 'jquery';
import {Constant} from './TimelineConstants';

const styles = {
	width: Constant.StatusCircle.radius * 2,
	height: Constant.StatusCircle.radius * 2,
	borderRadius: Constant.StatusCircle.radius * 2,
	boxShadow: '0px 0px 5px #BEBEBE',
	borderWidth: 5,
	borderStyle: 'solid',
	borderColor: '#D9D9D9',
	backgroundColor: 'white',
	cursor: 'pointer',
	transitionDuration: '0.5s'
};

export default class NotCompletedStatus extends Component {

	_scale() { //没找到伪元素内联的写法，用事件代替
		if(styles.transform){
			delete styles.transform;
		}else{
			styles.transform = 'scale(1.1)';
		}
		//强制刷一下，否则没有scale效果
		this.forceUpdate();
	}


	render(){
		return (
			<div style={styles} onMouseEnter={this._scale.bind(this)} onMouseLeave={this._scale.bind(this)} >

			</div>
			)
	}

}