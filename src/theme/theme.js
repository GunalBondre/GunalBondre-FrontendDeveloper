import { Palette } from './palette';

// eslint-disable-next-line import/no-anonymous-default-export
export const theme = {
	common: {
		bgColor: 'grey',
		errorColor: 'red',
		successColor: 'green',
		warningColor: 'orange',
	},

	Input: {
		background: 'transparent',
		borderColor: Palette.gray100,
		color: Palette.black,
		disabled: Palette.gray100,
	},
	Label: {
		color: Palette.gray100,
		activeLabel: Palette.gray,
	},
	Button: {
		background: Palette.white,
	},
};
