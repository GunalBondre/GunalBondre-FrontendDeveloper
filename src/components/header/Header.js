import React, { useState } from 'react';

const Header = () => {
	const [open, setOpen] = useState(false);

	return (
		<div>
			<div className='nav flex flex-col sm:flex-row items-center justify-between'>
				<div className='logo'>SPACEX</div>
				<ul className='menu'>
					<li className='menu__item'>About Us</li>
					<li className='menu__item'>Rockets</li>
					<li className='menu__item'>Investors</li>
					<li className='menu__item'>Career</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
