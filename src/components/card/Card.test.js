import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Card from './Card';

const mockData = {
	status: 'active',
	type: 'Dragon 1.0',
	details: 'lorem i[sum doler',
	original_launch: '2 aug 2019',
	landings: 1,
};

describe('Card Component', () => {
	it('should render the component', () => {
		render(<Card item={mockData} />);

		expect(screen.getByTestId('card')).toBeDefined();
	});

	it('should match the snapshot', () => {
		expect(render(<Card item={mockData} />)).toMatchSnapshot();
	});
});
