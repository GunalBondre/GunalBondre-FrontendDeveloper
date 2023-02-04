import React, { useState } from 'react';
import { BiMenu, BiX } from 'react-icons/bi';

const Header = () => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	let MenuLinks = [
		{ name: 'Falcon 9', href: '/falcon9' },
		{ name: 'Falcon Heavy', href: '/falcon-heavy' },
		{ name: 'Dragon', href: '/dragon' },
		{ name: 'Starship', href: '/starship' },
		{ name: 'Contact', href: '/contact' },
	];
	return (
		<div>
			<div className='nav max-w-7xl h-16 px-10 mx-auto flex items-center justify-between'>
				<div className='logo'>
					<a href='/'>SPACEX</a>{' '}
				</div>
				<ul
					className={`md:flex md:items-center md:pb-0 pb-12 absolute bg-white  md:static left-0 w-full md:w-auto md:pl-0 pl-9 md:z-auto z-[99] transition-all duration-500 ease-in ${
						open ? 'top-20 ' : 'top-[-490px]'
					}`}
				>
					{MenuLinks.map((link) => (
						<li key={link.name} className='md:ml-8 md:my-0 my-7'>
							<a
								href={link.href}
								className='text-gray-800 hover:text-gray-400 duration-500'
							>
								{link.name}
							</a>
						</li>
					))}
				</ul>
				<div className='hamburger block md:hidden' onClick={handleClick}>
					{open ? <BiX /> : <BiMenu />}
				</div>
			</div>
		</div>
	);
};

export default Header;
