import React from 'react';
import OperationsService from '../utils/OperationsService';

class Button extends React.Component {
	constructor(props) {
		super(props);
		this.customAttribute = { 'data-code': this.props.code };
	}

	bigButton() {
		return this.props.type === 'reset' || this.props.type === 'result'
			? 'big'
			: '';
	}

	pulse(e) {
		const operator = e.target.dataset.code;
		new OperationsService(operator);
	}

	render() {
		return (
			<div
				className={`button ${this.props.type} ${this.bigButton()}`.trim()}
				onClick={this.pulse.bind(this)}
				{...this.customAttribute}
			>
				{this.props.value}
			</div>
		);
	}
}

export default Button;
