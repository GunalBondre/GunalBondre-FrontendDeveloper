import styled, { css } from 'styled-components';
import { theme } from '../../theme/theme';

export const ButtonContainer = styled.button`
	width: ${(props) => (props.width ? `${props.width}px` : '100%')};
	max-width: ${(props) => (props.width ? props.width : '250px')};
	min-width: 150px;
	padding: 5px 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	outline: none;
	transition: all 0.5s ease;
	font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '18px')};
	color: ${(props) => (props.color ? props.color : 'black')};
	border-radius: ${(props) =>
		props.customRadius ? `${props.customRadius}px` : '5px'};
	background-color: ${(props) =>
		props.bgColor ? props.bgColor : theme.Button.background};
	${(props) => {
		if (props.disabled) {
			return css`
				background-color: gray;
			`;
		}
	}}
`;
