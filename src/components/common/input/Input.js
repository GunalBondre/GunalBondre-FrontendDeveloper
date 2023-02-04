import React, { useState } from 'react';
import { LabelWrapper, InputLabelWrapper, InputWrapper } from './input.style';

const Input = (props) => {
	const [value, setValue] = useState('');

	const handleChange = (e) => {
		let text = e.target.value;
		setValue(text);
	};

	console.log(value);

	const {
		variant,
		label,
		placeholder,
		width,
		borderColor,
		borderRadius,
		padding,
		fontSize,
		textColor,
		bgColor,
		labelPosition,
		maxWidth,
		disabled,
		type,
		onChange,
		name,
		...restProps
	} = props;
	return (
		<div>
			<InputLabelWrapper className='input__wrapper'>
				<LabelWrapper>{!placeholder && label}</LabelWrapper>
				<InputWrapper
					variant={variant}
					placeholder={placeholder}
					width={width}
					borderColor={borderColor}
					borderRadius={borderRadius}
					padding={padding}
					fontSize={fontSize}
					textColor={textColor}
					bgColor={bgColor}
					labelPosition={labelPosition}
					maxWidth={maxWidth}
					disabled={disabled}
					type={type}
					onChange={handleChange}
					value={value}
					{...restProps}
				/>
			</InputLabelWrapper>
		</div>
	);
};

export default Input;
