import React, {Component} from 'react';
import Timeline from './timeline/Timeline';
import $ from 'jquery';
import {Constant} from './timeline/TimelineConstants';
console.log(Constant);
const styles = {
	page: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left:0,
		right:0,
		backgroundColor: 'gray',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	demoContainer: {
		width: 800,
		backgroundColor: 'white',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}
};
const demoData = [
	{
		title: 'Sent PO',
		status: Constant.Status.COMPLETED
	}, {
		title: 'Created SO',
		status: Constant.Status.COMPLETED
	}, {
		title: 'Delivered',
		status: Constant.Status.COMPLETED
	}, {
		title: 'Received',
		status: Constant.Status.HALFCOMPLETED,
		subItems: [
			{
				title: 'Item1',
				unit: 'PC',
				completedAmout: 5,
				totleAmount: 20
			},{
				title: 'Item2',
				unit: 'PC',
				completedAmout: 20,
				totleAmount: 20
			}
		]
	}, {
		title: 'Invoiced',
		status: Constant.Status.HALFCOMPLETED,
		subItems: [
			{
				title: 'Item1',
				unit: 'CNY',
				completedAmout: 1500,
				totleAmount: 4000
			},{
				title: 'Item2',
				unit: 'CNY',
				completedAmout: 3850,
				totleAmount: 3850
			}
		]
	}, {
		title: 'Posted',
		status: Constant.Status.NOTCOMPLETED,
		subItems: [
			{
				title: 'ALL',
				unit: 'CNY',
				completedAmout: 5350,
				totleAmount: 7850
			},{
				title: 'INV 332432422',
				unit: 'CNY',
				completedAmout: 3850,
				totleAmount: 3850
			},{
				title: 'INV 2342354532',
				unit: 'CNY',
				completedAmout: 0,
				totleAmount: 2000
			},{
				title: 'INV 12324234212',
				unit: 'CNY',
				completedAmout: 0,
				totleAmount: 1850
			}
		]
	}, {
		title: 'Paid',
		status: Constant.Status.NOTCOMPLETED,
		subItems: [
			{
				title: 'ALL',
				unit: 'CNY',
				completedAmout: 5350,
				totleAmount: 7850
			},{
				title: 'INV 332432422',
				unit: 'CNY',
				completedAmout: 3850,
				totleAmount: 3850
			},{
				title: 'INV 2342354532',
				unit: 'CNY',
				completedAmout: 0,
				totleAmount: 2000
			},{
				title: 'INV 12324234212',
				unit: 'CNY',
				completedAmout: 0,
				totleAmount: 1850
			}
		]
	}
]
export default class App extends Component {
	
	render() {
		return (<div style={styles.page}>
				<div style={styles.demoContainer}>
					<Timeline data={demoData} title='React Timeline Demo'/>
				</div>
			</div>);
	}
}