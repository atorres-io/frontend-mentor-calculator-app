import React from 'react';
import ThemeSlider from '../ThemeSlider';

class Header extends React.Component {
	render() {
		return (
			<section className='wrapper-header'>
				<h1 className='logotype'>calc</h1>
				<ThemeSlider />
			</section>
		);
	}
}

export default Header;
