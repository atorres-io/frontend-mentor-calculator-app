import React from 'react';
import Header from '../components/layout/Header';
import Main from '../components/layout/Main';

class Calculator extends React.Component {
	render() {
		return (
			<div className='calculator'>
				<Header />
				<Main />
			</div>
		);
	}
}

export default Calculator;
