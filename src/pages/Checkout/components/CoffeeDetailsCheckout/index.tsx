import { Trash } from 'phosphor-react';
import { AmountButtons } from '../../../../components/AmountButtons';
import { Coffee } from '../../../../types/coffee';
import { priceFormatter } from '../../../../Utils/formatter';
import { Container, LabelWithButtons } from './styles';
import { useDispatch } from 'react-redux';
import { coffeeActions } from '../../../../store';

interface CoffeeDetailsCheckoutProps {
	coffee: Coffee;
}

export function CoffeeDetailsCheckout(props: CoffeeDetailsCheckoutProps) {
	const {
		coffee: { id, name, amount, price, imgSrc },
	} = props;

	const dispatch = useDispatch();

	function handleIncreaseAmount(id: string) {
		dispatch(coffeeActions.addCoffee({ id }));
	}

	function handleDecreaseAmount(id: string) {
		dispatch(coffeeActions.removeCoffee({ id }));
	}

	function handleRemoveAllCoffees(id: string) {
		dispatch(coffeeActions.removeAllCoffees({ id }));
	}

	return (
		<Container>
			<div>
				<img src={imgSrc} />
				<LabelWithButtons>
					<span>{name}</span>
					<div>
						<AmountButtons
							id={id}
							amount={amount}
							onDecreaseAmount={handleDecreaseAmount}
							onIncreaseAmount={handleIncreaseAmount}
							disabledDecreaseButton={amount === 1}
						/>
						<button onClick={() => handleRemoveAllCoffees(id)}>
							<Trash />
							<span>remover</span>
						</button>
					</div>
				</LabelWithButtons>
			</div>
			<span>{priceFormatter.format(price * amount)}</span>
		</Container>
	);
}
