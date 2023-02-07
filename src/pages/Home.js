import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { background } from '../assets';
import Button from '../components/button/Button';
import Input from '../components/common/input/Input';
import Dropdown from '../components/select/Dropdown';
import { getData } from '../redux/capsuleSlice';
import Select from 'react-select';
import Card from '../components/card/Card';

const Home = () => {
	const { data } = useSelector((state) => state.capsules);
	const [page, setPage] = useState(1);
	const [type, setType] = useState([]);
	const [status, setStatus] = useState([]);
	const [filteredData, setFilteredData] = useState([]);

	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		let newData = data.filter((items) => {
			if (status && type) {
				setFilteredData({ type: items['type'], status: items['status'] });
			} else if (status) {
				setStatus(items['status']);
				setFilteredData({ status: items['status'] });
			} else if (type) {
				setType(items['type']);
				setFilteredData({ type: items['type'] });
			}
			return data;
		});

		return newData;
	};

	const statusData = [
		{ value: 'retired', label: 'retired' },
		{ value: 'active', label: 'active' },
		{ value: 'destroyed', label: 'destroyed' },
	];

	const typeData = [
		{ value: 'Dragon 1.0', label: 'Dragon 1.0' },
		{ value: 'Dragon 1.1', label: 'Dragon 1.1' },
		{ value: 'Dragon 2.0', label: 'Dragon 2.0' },
	];

	const handlePagination = (selectedPage) => {
		if (
			selectedPage >= 1 &&
			selectedPage <= data.length / 4 &&
			selectedPage !== page
		) {
			setPage(selectedPage);
		}
	};

	useEffect(() => {
		dispatch(getData());
	}, [dispatch]);

	return (
		<>
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
								Cupiditate adipisci consequuntur expedita culpa iusto optio
								ipsum neque eligendi accusantium libero?
							</p>
							<div className='hero-section__form flex flex-col items-center w-full md:flex-row py-2'>
								<Input type='email' bgColor='white' placeholder='Enter Email' />
								<Button className='ml-2 mt-2 md:mt-0'>Submit</Button>
							</div>
						</div>
					</div>
					<div className='md:flex-1'></div>
				</div>
			</div>
			<div className='searchForm py-20 w-screen flex justify-center'>
				<form
					onSubmit={handleSubmit}
					className='w-full md:w-[60%] flex flex-col h-auto md:flex-row md:justify-between p-10'
				>
					<div className='form-group md:w-[50%] w-full mb-2 md:mb-0 md:mx-2'>
						<Dropdown
							options={statusData}
							isSearchable={true}
							onChange={(e) => setStatus(e)}
							value={status}
							required
						/>
					</div>
					<div className='form-group md:w-[50%] w-full mb-2 md:mb-0 md:mx-2'>
						<Dropdown
							options={typeData}
							isSearchable={true}
							onChange={(e) => setType(e)}
							value={type}
						/>
					</div>
					<div className='form-group md:w-[50%] w-full mb-2 md:mb-0 md:mx-2'>
						<Button bgColor='gray'>Search</Button>
					</div>
				</form>
			</div>
			<div className='max-w-7xl mx-auto grid w-full py-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center'>
				{data.slice(page * 4 - 4, page * 4).map((item) => {
					return <Card item={item} key={item.capsule_serial} />;
				})}
			</div>
			{data.length > 0 && (
				<div className='pagination py-10 flex justify-center items-center  mx-auto'>
					<button onClick={() => handlePagination(page - 1)}>prev</button>
					<span>
						{[...Array(Math.floor(data.length / 4))].map((_, i) => {
							return (
								<span
									className={
										page === i + 1
											? ' px-3 py-3 cursor-pointer mx-2 bg-slate-400'
											: ' px-3 py-3 bg-slate-100 cursor-pointer mx-2'
									}
									key={i}
									onClick={() => handlePagination(i + 1)}
								>
									{i + 1}
								</span>
							);
						})}
					</span>
					<button onClick={() => handlePagination(page + 1)}>Next</button>
				</div>
			)}
		</>
	);
};

export default Home;
