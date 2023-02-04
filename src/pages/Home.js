import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { background } from '../assets';
import Button from '../components/button/Button';
import Input from '../components/common/input/Input';
import Dropdown from '../components/select/Dropdown';
import { getData } from '../redux/capsuleSlice';

const Home = () => {
	const dispatch = useDispatch();
	const { loading, data } = useSelector((state) => state.capsules);

	const handleSubmit = () => {};

	const status = [
		{ value: 'retired', label: 'retired' },
		{ value: 'active', label: 'active' },
		{ value: 'destroyed', label: 'destroyed' },
	];

	const type = [
		{ value: 'Dragon 1.0', label: 'Dragon 1.0' },
		{ value: 'Dragon 1.1', label: 'Dragon 1.1' },
		{ value: 'Dragon 2.0', label: 'Dragon 2.0' },
	];

	let result = data.map(({ status, type, original_launch }) => {
		return [status, original_launch, type];
	});
	console.log(result);

	useEffect(() => {
		dispatch(getData());
	}, [dispatch]);

	return (
		<div
			className='wrapper w-screen md:h-screen h-auto bg-center bg-no-repeat bg-cover'
			style={{ backgroundImage: `url(${background})` }}
		>
			<div className='hero-section max-w-7xl flex flex-col md:flex-row md:h-screen h-auto mx-auto px-10 py-10 md:py-0'>
				<div className='hero-section__content-block flex flex-1 justify-center items-center'>
					<div className='hero-section__text text-white'>
						<h1 className='text-4xl'>SPACE</h1>
						<h3>Reasearch Center</h3>
						<p className='py-5 text-lg'>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Cupiditate adipisci consequuntur expedita culpa iusto optio ipsum
							neque eligendi accusantium libero?
						</p>
						<div className='hero-section__form flex flex-col items-center w-full md:flex-row py-2'>
							<Input type='email' bgColor='white' placeholder='Enter Email' />
							<Button className='ml-2 mt-2 md:mt-0'>Submit</Button>
						</div>
					</div>
				</div>
				<div className='md:flex-1'></div>
			</div>

			<div className='searchForm py-10 w-full h-screen flex justify-center'>
				<form
					onSubmit={handleSubmit}
					className='w-[50%] flex flex-col md:flex-row p-10'
				>
					<div className='form-group w-[50%]'>
						<Dropdown
							options={status}
							isSearchable={true}
							defaultValue={status[0].value}
						/>
					</div>
					<div className='form-group w-[50%]'>
						<Dropdown
							options={type}
							isSearchable={true}
							defaultValue={type[0].value}
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Home;
