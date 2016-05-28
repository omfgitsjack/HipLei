import React from 'react';

class Subheader extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'Subheader';
	}

	render() {
		return (
			<div className="subheader" style={this.props.style}>
				{this.props.title}
			</div>);
	}
}

export default Subheader;