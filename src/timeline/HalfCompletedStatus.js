import React, {Component} from 'react';
import $ from 'jquery';
import {Constant} from './TimelineConstants';

const styles = {
	outer: {
		width: Constant.StatusCircle.radius * 2,
		height: Constant.StatusCircle.radius * 2,
		borderRadius: Constant.StatusCircle.radius * 2,
		boxShadow: '0px 0px 5px #BEBEBE',
		borderWidth: 5,
		borderStyle: 'solid',
		borderColor: 'rgb(0,176,250)',
		backgroundColor: 'white',
		cursor: 'pointer',
		transitionDuration: '0.5s'
	},
	inner: {
		width: Constant.StatusCircle.radius,
		height: 0,
		//borderWidth
		borderTop: '15px solid #00B0F0',
		borderBottom: '15px solid #00B0F0',
		borderTopLeftRadius: 15,
		borderBottomLeftRadius: 15
	}
};

export default class HalfCompletedStatus extends Component {

	_scale() { //没找到伪元素内联的写法，用事件代替
		if(styles.outer.transform){
			delete styles.outer.transform;
		}else{
			styles.outer.transform = 'scale(1.1)';
		}
		//强制刷一下，否则没有scale效果
		this.forceUpdate();
	}


	render(){
		return (
			<div style={styles.outer} onMouseEnter={this._scale.bind(this)} onMouseLeave={this._scale.bind(this)} >
				<div style={styles.inner}></div>
			</div>
			)
	}

}