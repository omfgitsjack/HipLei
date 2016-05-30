import React from 'react';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class HLSelectField extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'HLSelectField';
	}

	render() {
		return (
			<div className="text-field">
				<SelectField {...this.props} floatingLabelStyle={floatingLabelStyle}>
					<MenuItem value={0} primaryText="0"></MenuItem>
					<MenuItem value={1} primaryText="1"></MenuItem>
					<MenuItem value={2} primaryText="2"></MenuItem>
					<MenuItem value={3} primaryText="3"></MenuItem>
					<MenuItem value={4} primaryText="4"></MenuItem>
					<MenuItem value={5} primaryText="5"></MenuItem>
				</SelectField>
			</div>);
	}
}

const floatingLabelStyle = {
    fontSize: '20px'
}

export default HLSelectField;