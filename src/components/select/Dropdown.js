import React from 'react';
import Select from 'react-select';

const Dropdown = ({ options, isSearchable }) => {
	return (
		<div>
			<Select
				options={options}
				className='w-[2/5]'
				isSearchable={isSearchable}
			/>
		</div>
	);
};

export default Dropdown;
