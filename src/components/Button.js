import React from 'react';

class Button extends React.Component {
	bigButton() {
		return this.props.type === 'reset' || this.props.type === 'result'
			? 'big'
			: '';
	}

	render() {
		return (
			<div className={`button ${this.props.type} ${this.bigButton()}`}></div>
		);
	}
}

export default Button;
