import React from 'react';
import Screen from '../Screen';
import Keypad from '../Keypad';

class Main extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Screen />
				<Keypad />
			</React.Fragment>
		);
	}
}

export default Main;
