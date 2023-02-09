import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Input from './Input';

describe('Input Component', () => {
	it('should render input component', () => {
		render(<Input />);

		expect(screen.getByTestId('input-wrapper')).toBeDefined();
	});

	it('should match the snapshot', () => {
		expect(
			render(<Input width={200} borderRadius={10} fontSize='16' />)
		).toMatchSnapshot();
	});

	it('should render input component with props', () => {
		render(
			<Input
				borderRadius='10'
				fontSize='16'
				padding='10'
				textColor='orange'
				maxWidth='400'
			/>
		);

		expect(screen.getByTestId('input')).toBeDefined();
		expect(screen.getByTestId('input')).toHaveStyle(
			'border-radius:10px;font-size:16px;padding:10px;color:orange;max-width:400px'
		);
	});

	it('should render the component with background color', () => {
		render(<Input bgColor='red' />);

		expect(screen.getByTestId('input')).toHaveStyle('background-color:red');
	});

	it('should render the component with disabled prop', () => {
		render(<Input disabled />);

		expect(screen.getByTestId('input')).toHaveStyle(
			'background-color:rgb(153, 153, 153)'
		);
	});

	it('should change the input value onchange', () => {
		render(<Input />);

		expect(screen.getByTestId('input').value).toBe('');

		fireEvent.change(screen.getByTestId('input'), { target: { value: 'abc' } });

		expect(screen.getByTestId('input').value).toBe('abc');
	});
});
