import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Header from './Header';

describe('Header Component', () => {
	it('should match snapshot', () => {
		expect(render(<Header />)).toMatchSnapshot();
	});

	it('should render the appropriate icon on hamburger menu click', () => {
		render(<Header />);

		expect(screen.getByTestId('open')).toBeDefined();
		expect(screen.queryByTestId('close')).toBeNull();

		fireEvent.click(screen.getByTestId('hamburger-menu'));

		expect(screen.getByTestId('close')).toBeDefined();
		expect(screen.queryByTestId('open')).toBeNull();
	});
});
