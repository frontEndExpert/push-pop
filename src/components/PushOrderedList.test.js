import { render, screen, fireEvent, act } from '@testing-library/react';
import { mount } from 'react-dom/test-utils';
import PushOrderedList from './PushOrderedList';
import userEvent from '@testing-library/user-event';
import { beforeEach } from 'node:test';
import { nextTick } from 'process';
//import { jest } from 'jest';

describe('PushOrderedList', () => {
	render(<PushOrderedList />);
	const tinput = screen.getByTestId('tinput');
	const pushButton = screen.getByTestId('push-button');
	const popButton = screen.getByTestId('pop-button');
	const toutput = screen.getByTestId('toutput');
	// beforeEach(() => {
	// 	render(<PushOrderedList />);
	// });

	test('pop Button Rendering', () => {
		render(<PushOrderedList />);
		const popButton1 = screen.findByTestId('pop-button');
		expect(popButton1).toBeTruthy();
	});

	test('Input Rendering', async () => {
		render(<PushOrderedList />);
		const tinput = await screen.findByTestId('tinput');
		expect(tinput).toBeInTheDocument();
	});

	// Test 2
	test('Input Text', () => {
		fireEvent.change(tinput, { target: { value: 'foo' } });

		expect(tinput.value).toBe('foo');
	});

	// test('should fire the handlePush method when click on push-button', async () => {
	// 	//const handlePush = jest.fn();
	// 	render(<PushOrderedList />);
	// 	const pushButton = screen.getByTestId('push-button');
	// 	const toutput = screen.getByTestId('toutput');
	// 	fireEvent.change(tinput, { target: { value: 'foo' } });
	// 	await act(() => userEvent.click(pushButton));
	// 	expect(toutput).toHaveTextContent('foo -->');
	// });

	// test('should show the same amount of time for different size of inputs for the push method', async () => {
	// 	render(<PushOrderedList />);

	// 	const handlePush = jest.fn();
	// 	for (let i = 1; i < 10; i++) {
	// 		fireEvent.change(tinput, { target: { value: i } });
	// 		//screen.findByTestId('push-button').click();
	// 		await userEvent.click(pushButton);
	// 	}
	// 	expect(handlePush).toHaveBeenCalled();
	// 	const output1 = await screen.findByTestId('toutput');
	// 	const output2 = screen.getByTestId('toutput');

	// 	console.log(output1, output2);

	// 	expect(output2).toHaveTextContent(
	// 		'10 --> 9 --> 8 --> 7 --> 6 --> 5 --> 4 --> 3 --> 2 --> 1 -->'
	// 	);
	// 	expect(toutput).toHaveTextContent(
	// 		'10 --> 9 --> 8 --> 7 --> 6 --> 5 --> 4 --> 3 --> 2 --> 1 -->'
	// 	);
	// 	expect(output1).toHaveTextContent(
	// 		'10 --> 9 --> 8 --> 7 --> 6 --> 5 --> 4 --> 3 --> 2 --> 1 -->'
	// 	);
	// });

	// test('pop method works correctly', () => {
	// 	//const wrapper = mount(<PushOrderedList />);

	// 	for (let i = 1; i < 10; i++) {
	// 		fireEvent.change(tinput, { target: { value: i } });
	// 		userEvent.click(pushButton);
	// 	}
	// 	for (let i = 9; i >= 1; i--) {
	// 		userEvent.click(popButton);
	// 		expect(toutput).toHaveTextContent(i + ' --> ');
	// 	}
	// 	console.log('this.head', this.head);
	// 	expect(toutput).toHaveTextContent('1 --> ');
	// });

	// test('PushOrderedList component works correctly with different types of input data', async () => {
	// 	//const wrapper = mount(<PushOrderedList />);

	// 	fireEvent.change(input, { target: { value: 'foo' } });
	// 	await userEvent.click(pushButton);
	// 	expect(toutput).toHaveTextContent('foo --> ');

	// 	await fireEvent.change(input, { target: { value: 123.456 } });
	// 	userEvent.click(pushButton);
	// 	expect(toutput).toHaveTextContent('foo --> 123.456 --> ');

	// 	fireEvent.change(input, { target: { value: true } });
	// 	await userEvent.click(pushButton);
	// 	expect(toutput).toHaveTextContent('foo --> 123.456 --> true --> ');
	// });

	//test('push integers build the list at O(1) time', () => {});
});
