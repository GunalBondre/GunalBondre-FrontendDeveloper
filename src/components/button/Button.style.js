import styled from 'styled-components';
import { theme } from '../../theme/theme';

export const ButtonContainer = styled.button`
	width: ${(props) => (props.width ? props.width : '100%')};
	max-width: ${(props) => (props.width ? props.width : '250px')};
	min-width: 150px;
	padding: 8px 15px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	outline: none;
	transition: all 0.5s ease;
	font-size: ${(props) => (props.fontSize ? props.fontSize : '18px')};
	color: ${(props) => (props.color ? props.color : 'black')};
	border-radius: ${(props) =>
		props.customRadius ? props.customRadius : '5px'};
	background-color: ${(props) =>
		props.bgColor ? props.bgColor : theme.Button.background};
`;
