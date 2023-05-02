import { Minus, Plus } from 'phosphor-react';
import { Container } from './styles';

interface AmountButtonsProps {
	id: string;
	amount: number;
	onDecreaseAmount: (id: string) => void;
	onIncreaseAmount: (id: string) => void;
	disabledDecreaseButton?: boolean;
}

export function AmountButtons(props: AmountButtonsProps) {
	const {
		id,
		amount,
		onDecreaseAmount,
		onIncreaseAmount,
		disabledDecreaseButton,
	} = props;

	return (
		<Container>
			<button
				disabled={amount === 0 || disabledDecreaseButton}
				onClick={() => onDecreaseAmount(id)}
				aria-label='decreaseButton'
				type='button'
			>
				<Minus weight='bold' size={14} />
			</button>
			<span>{amount}</span>
			<button
				onClick={() => onIncreaseAmount(id)}
				type='button'
				aria-label='increaseButton'
			>
				<Plus weight='bold' size={14} />
			</button>
		</Container>
	);
}
