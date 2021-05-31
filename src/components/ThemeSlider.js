import React from 'react';
import { getColorScheme, updateColorScheme } from '../utils/SchemeService';

class ThemeSlider extends React.Component {
	constructor() {
		super();
		this.state = {
			colorScheme: 'neutral',
		};
	}

	componentDidMount() {
		const newColorScheme = getColorScheme();

		this.setState(
			{ colorScheme: newColorScheme },
			updateColorScheme(newColorScheme)
		);
	}

	handleColorScheme(e) {
		const COLORS_SCHEME = ['neutral', 'light', 'dark'];
		const selector = e.target.value;
		const newColorScheme = COLORS_SCHEME[selector - 1];

		this.setState(
			{ colorScheme: newColorScheme },
			updateColorScheme(newColorScheme)
		);
	}

	render() {
		return (
			<input
				type='range'
				min='1'
				max='3'
				step='1'
				onChange={this.handleColorScheme.bind(this)}
			></input>
		);
	}
}

export default ThemeSlider;
