import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AmountButtons } from '.';

describe('AmountButtons', () => {
	it('should show correct amount value', () => {
		render(
			<AmountButtons
				id='1'
				amount={50}
				onDecreaseAmount={jest.fn()}
				onIncreaseAmount={jest.fn()}
			/>
		);

		expect(screen.getByText('50')).toBeInTheDocument();
	});

	test.each([1, 2, 100])(
		'should enable decrease button when amount is greater than zero',
		(value) => {
			render(
				<AmountButtons
					id='1'
					amount={value}
					onDecreaseAmount={jest.fn()}
					onIncreaseAmount={jest.fn()}
				/>
			);

			const decreaseButton = screen.getByRole('button', {
				name: /decreaseButton/i,
			});
			expect(decreaseButton).toBeEnabled();
		}
	);

	it('should disable decrease button when amount is zero', () => {
		render(
			<AmountButtons
				id='1'
				amount={0}
				onDecreaseAmount={jest.fn()}
				onIncreaseAmount={jest.fn()}
			/>
		);

		const decreaseButton = screen.getByRole('button', {
			name: /decreaseButton/i,
		});
		expect(decreaseButton).toBeDisabled();
	});

	it('should disable decrease button when disabledDecreaseButton prop is true', () => {
		render(
			<AmountButtons
				id='1'
				amount={1}
				onDecreaseAmount={jest.fn()}
				onIncreaseAmount={jest.fn()}
				disabledDecreaseButton
			/>
		);

		const decreaseButton = screen.getByRole('button', {
			name: /decreaseButton/i,
		});
		expect(decreaseButton).toBeDisabled();
	});

	it('should call mocked function with id value when decrease button is clicked', async () => {
		const mockedFunc = jest.fn((x) => {});
		const id = '5';

		render(
			<AmountButtons
				id={id}
				amount={1}
				onDecreaseAmount={mockedFunc}
				onIncreaseAmount={jest.fn()}
			/>
		);

		const decreaseButton = screen.getByRole('button', {
			name: /decreaseButton/i,
		});

		await userEvent.click(decreaseButton);

		expect(mockedFunc).toHaveBeenCalledWith(id);
	});

	it('should call mocked function with id value when increase button is clicked', async () => {
		const mockedFunc = jest.fn((x) => {});
		const id = '6';

		render(
			<AmountButtons
				id={id}
				amount={1}
				onDecreaseAmount={jest.fn()}
				onIncreaseAmount={mockedFunc}
			/>
		);

		const increaseButton = screen.getByRole('button', {
			name: /increaseButton/i,
		});

		await userEvent.click(increaseButton);

		expect(mockedFunc).toHaveBeenCalledWith(id);
	});
});
