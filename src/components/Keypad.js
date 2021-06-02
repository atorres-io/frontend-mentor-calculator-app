import React from 'react';
import Button from './Button';

class Keypad extends React.Component {
	render() {
		return (
			<div className='keypad'>
				<Button type='number' value='7' />
				<Button type='number' value='8' />
				<Button type='number' value='9' />
				<Button type='del' value='del' />
				<Button type='number' value='4' />
				<Button type='number' value='5' />
				<Button type='number' value='6' />
				<Button type='number' value='+' />
				<Button type='number' value='1' />
				<Button type='number' value='2' />
				<Button type='number' value='3' />
				<Button type='number' value='-' />
				<Button type='number' value='.' />
				<Button type='number' value='0' />
				<Button type='number' value='/' />
				<Button type='number' value='x' />
				<Button type='reset' value='reset' />
				<Button type='result' value='=' />
			</div>
		);
	}
}

export default Keypad;
