import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Dropdown from './Dropdown';

const mockData = [
	{ value: 'retired', label: 'retired' },
	{ value: 'active', label: 'active' },
	{ value: 'destroyed', label: 'destroyed' },
];

describe('Dropdown Component', () => {
	it('should match the snapshot', () => {
		expect(render(<Dropdown options={mockData} />)).toMatchSnapshot();
	});
});
