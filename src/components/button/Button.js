import React from 'react';
import PropTypes from 'prop-types';
import { ButtonContainer } from './Button.style';

const Button = ({
	color,
	size,
	children,
	borderRadius,
	noBorder,
	width,
	fontSize,
	disabled,
	bgColor,
	...props
}) => {
	return (
		<ButtonContainer
			color={color}
			width={width}
			customRadius={borderRadius}
			noBorder={noBorder}
			size={size}
			fontSize={fontSize}
			disabled={disabled}
			data-testid='button'
			bgColor={bgColor}
			{...props}
		>
			{children}
		</ButtonContainer>
	);
};

Button.propTypes = {
	color: PropTypes.string,
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	children: PropTypes.node,
	borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	noBorder: PropTypes.bool,
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	disabled: PropTypes.bool,
	bgColor: PropTypes.string,
};

Button.defaultProps = {
	color: undefined,
	size: undefined,
	children: undefined,
	borderRadius: undefined,
	noBorder: false,
	width: undefined,
	fontSize: undefined,
	disabled: false,
	bgColor: undefined,
};

export default Button;
