import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { LabelWrapper, InputLabelWrapper, InputWrapper } from './input.style';

const Input = (props) => {
	const [value, setValue] = useState('');

	const handleChange = (e) => {
		let text = e.target.value;
		setValue(text);
	};

	const {
		label,
		placeholder,
		width,
		borderColor,
		borderRadius,
		padding,
		fontSize,
		textColor,
		bgColor,
		maxWidth,
		disabled,
		type,
		...restProps
	} = props;
	return (
		<div>
			<InputLabelWrapper className='input__wrapper' data-testid='input-wrapper'>
				<LabelWrapper>{!placeholder && label}</LabelWrapper>
				<InputWrapper
					placeholder={placeholder}
					width={width}
					borderColor={borderColor}
					borderRadius={borderRadius}
					padding={padding}
					fontSize={fontSize}
					textColor={textColor}
					bgColor={bgColor}
					maxWidth={maxWidth}
					disabled={disabled}
					type={type}
					onChange={handleChange}
					value={value}
					data-testid='input'
					{...restProps}
				/>
			</InputLabelWrapper>
		</div>
	);
};

Input.propTypes = {
	label: PropTypes.string,
	placeholder: PropTypes.string,
	width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	borderColor: PropTypes.string,
	borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	textColor: PropTypes.string,
	bgColor: PropTypes.string,
	maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	disabled: PropTypes.bool,
	type: PropTypes.string,
};

Input.defaultProps = {
	label: undefined,
	placeholder: undefined,
	width: undefined,
	borderColor: undefined,
	borderRadius: undefined,
	padding: undefined,
	fontSize: undefined,
	textColor: undefined,
	bgColor: undefined,
	maxWidth: undefined,
	disabled: false,
};
export default Input;
