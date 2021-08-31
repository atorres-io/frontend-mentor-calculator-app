import React from 'react';
import Button from './Button';
import { buttonsList } from '../utils/buttonsList';

class Keypad extends React.Component {
	render() {
		return (
			<div className='keypad'>
				{buttonsList.map(({ type, code, value }) => {
					return <Button type={type} code={code} value={value} key={value} />;
				})}
			</div>
		);
	}
}

export default Keypad;
