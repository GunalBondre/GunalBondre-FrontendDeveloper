import React from 'react';
import { ButtonContainer } from './Button.style';

const Button = ({
	color,
	size,
	children,
	borderRadius,
	noBorder,
	width,
	height,
	fontSize,
	disabled,
	bgColor,
	...props
}) => {
	return (
		<ButtonContainer
			color={color}
			width={width}
			height={height}
			customRadius={borderRadius}
			noBorder={noBorder}
			size={size}
			fontSize={fontSize}
			disabled={disabled}
			data-testid='button-test'
			bgColor={bgColor}
			{...props}
		>
			{children}
		</ButtonContainer>
	);
};

export default Button;
