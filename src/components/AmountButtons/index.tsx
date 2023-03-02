import { Minus, Plus } from 'phosphor-react';
import { Wrapper } from './styles';

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
		<Wrapper>
			<button
				disabled={amount === 0 || disabledDecreaseButton}
				onClick={() => onDecreaseAmount(id)}
				type='button'
			>
				<Minus weight='bold' size={14} />
			</button>
			<span>{amount}</span>
			<button onClick={() => onIncreaseAmount(id)} type='button'>
				<Plus weight='bold' size={14} />
			</button>
		</Wrapper>
	);
}
