import React from 'react';
import { rocketImg } from '../../assets';

const Card = ({ item }) => {
	return (
		<div
			className='max-w-md rounded overflow-hidden shadow-lg'
			key={item.capsule_serial}
		>
			<img className='w-full' src={rocketImg} alt='rocket' />
			<div className='px-6 py-4'>
				<div className='font-bold text-xl mb-2'>status - {item.status}</div>
				<p className='text-gray-700 text-base'>details - {item.details}</p>
			</div>
			<div className='px-6 pt-4 pb-2'>
				<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
					type - {item.type}
				</span>
				<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
					launch - {item.original_launch}
				</span>
				<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
					landing - {item.landings}
				</span>
			</div>
		</div>
	);
};

export default Card;
