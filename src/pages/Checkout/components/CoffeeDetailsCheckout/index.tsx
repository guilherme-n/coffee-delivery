import { Trash } from 'phosphor-react';
import { AmountButtons } from '../../../../components/AmountButtons';
import { useCoffee } from '../../../../hooks/CoffeeContext';
import { Coffee } from '../../../../types/coffee';
import { priceFormatter } from '../../../../Utils/formatter';
import { Container, LabelWithButtons } from './styles';

interface CoffeeDetailsCheckoutProps {
	coffee: Coffee;
}

export function CoffeeDetailsCheckout(props: CoffeeDetailsCheckoutProps) {
	const {
		coffee: { id, name, amount, price, imgSrc },
	} = props;

	const { addCoffee, removeCoffee, removeAllCoffees } = useCoffee();

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
							onDecreaseAmount={removeCoffee}
							onIncreaseAmount={addCoffee}
							disabledDecreaseButton={amount === 1}
						/>
						<button onClick={() => removeAllCoffees(id)}>
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
