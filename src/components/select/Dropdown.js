import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

const Dropdown = ({ options, isSearchable, onChange, value, defaulValue }) => {
	return (
		<div>
			<Select
				options={options}
				className='w-[2/5]'
				isSearchable={isSearchable}
				onChange={onChange}
				data-testid='dropdown'
				value={value}
				defaulValue={defaulValue}
			/>
		</div>
	);
};

Dropdown.propTypes = {
	options: PropTypes.array.isRequired,
	isSearchable: PropTypes.bool,
	onChange: PropTypes.func,
	value: PropTypes.string,
	defaulValue: PropTypes.string,
};

export default Dropdown;
