import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Button from './Button';

describe('button component', () => {
	it('should match the snapshot', () => {
		expect(<Button />).toMatchSnapshot();
	});

	it('should render the button component', () => {
		render(<Button />);

		expect(screen.getByTestId('button')).toBeInTheDocument();
	});

	it('should render the button component with color prop', () => {
		render(<Button color={'red'} />);

		expect(screen.getByTestId('button')).toBeInTheDocument();
		expect(screen.getByTestId('button')).toHaveStyle('color:red');
	});

	it('should render the button component with width prop', () => {
		render(<Button width={200} />);

		expect(screen.getByTestId('button')).toBeInTheDocument();
		expect(screen.getByTestId('button')).toHaveStyle('width:200px');
	});

	it('should render the button component with borderRadius prop', () => {
		render(<Button borderRadius={10} />);

		expect(screen.getByTestId('button')).toBeInTheDocument();
		expect(screen.getByTestId('button')).toHaveStyle('border-radius:10px');
	});

	it('should render the button component with bgColor prop', () => {
		render(<Button bgColor={'red'} />);

		expect(screen.getByTestId('button')).toBeInTheDocument();
		expect(screen.getByTestId('button')).toHaveStyle('background-color:red');
	});
});
