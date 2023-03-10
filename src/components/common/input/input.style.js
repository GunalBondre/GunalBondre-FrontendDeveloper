import styled, { css } from 'styled-components';
import { Palette } from '../../../theme/palette';
import { theme } from '../../../theme/theme';

const PADDING = 10;
const BORDER_RADIUS = 5;
export const InputLabelWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	min-width: 350px;
	&:focus-within {
		label {
			top: -10px;
			transform: translateY(10px);
			transform: scale(0.85);
			background-color: ${Palette.white};
			color: ${theme.Label.activeLabel};
			z-index: 1;
		}
	}
`;
export const LabelWrapper = styled.div``;
export const InputWrapper = styled.input`
	padding: ${(props) => (props.padding ? props.padding : PADDING)}px;
	width: ${(props) => (props.width ? `${props.width}px` : 100)}%;
	border-radius: ${(props) =>
		props.borderRadius ? props.borderRadius : BORDER_RADIUS}px;
	outline: none;
	border: 1px solid gray;
	background-color: ${(props) =>
		props.bgColor
			? props.bgColor
			: props.disabled
			? theme.Input.disabled
			: 'transparent'};
	font-size: ${(props) => (props.fontSize ? props.fontSize : 16)}px;
	border-color: ${(props) =>
		props.borderColor ? props.borderColor : theme.Input.borderColor};
	max-width: ${(props) => (props.maxWidth ? props.maxWidth : 450)}px;
	color: ${(props) => (props.textColor ? props.textColor : theme.Input.color)};
	transition: all 0.5s ease;
	&::placeholder {
		color: ${theme.Label.color};
	}
	&:focus-within {
		border-color: ${Palette.teal};
	}
	&:hover {
		border-color: ${Palette.teal};
	}

	${(props) => {
		if (props.disabled) {
			return css`
				opacity: 0.6;
				&:hover {
					border-color: transparent;
				}
				&:focus-within {
					border-color: transparent;
				}
			`;
		}
	}}
`;
