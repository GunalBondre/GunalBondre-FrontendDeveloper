import React from 'react';
import Select from 'react-select';

const Dropdown = ({ options, isSearchable, onChange }) => {
	return (
		<div>
			<Select
				options={options}
				className='w-[2/5]'
				isSearchable={isSearchable}
				onChange={onChange}
			/>
		</div>
	);
};

export default Dropdown;
