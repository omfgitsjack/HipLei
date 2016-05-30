import React from 'react';

import Paper from 'material-ui/Paper';

class ResultsArea extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'ResultsArea';
	}

	renderWork(props) {
		if (props.showWork) {
			if (props.vertical && props.horizontal) {
				return (
					<div>
						<p>Vertical: {props.vertical}</p>
						<p>Horizontal: {props.horizontal}</p>
					</div>)
			}
			if (props.lid && props.base && props.body) {
				return (
					<div>
						<p>Body: {props.body}</p>
						<p>Base: {props.base}</p>
						<p>Lid: {props.lid}</p>
					</div>)
			}
		} else {
			return undefined
		}
	}

	render() {
		if (this.props && this.props.surfaceArea) {
			return (
				<Paper className="results-area">
					<h4 style={{marginTop: '0'}}>總面積: {this.props.surfaceArea}</h4>
					<h4 style={{marginTop: '0'}}>每磅料可做盒: {this.props.amount}</h4>
					{this.renderWork(this.props)}
				</Paper>);
		} else {
			return <div></div>
		}
	}
}

export default ResultsArea;