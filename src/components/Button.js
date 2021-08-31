import React from 'react';

class Button extends React.Component {
	constructor(props) {
		super(props);
		this.customAttribute = { [`data-${this.props.type}`]: this.props.value };
	}

	bigButton() {
		return this.props.type === 'reset' || this.props.type === 'result'
			? 'big'
			: '';
	}

	render() {
		return (
			<div
				className={`button ${this.props.type} ${this.bigButton()}`.trim()}
				onClick={() => console.log('click')}
				{...this.customAttribute}
			>
				{this.props.value}
			</div>
		);
	}
}

export default Button;
