import { ShoppingCart } from 'phosphor-react';
import { AmountButtons } from '../../../../components/AmountButtons';
import { useDispatch } from 'react-redux';
import { Coffee } from '../../../../types/coffee';
import {
	extractValueAndSymbolFromMoney,
	priceFormatter,
} from '../../../../Utils/formatter';
import {
	Container,
	PillShapesContainer,
	PriceAndAmountContainer,
	PriceLabels,
	CartContainer,
} from './styles';
import { coffeeActions } from '../../../../store';

interface CoffeeDetailsProps {
	coffee: Coffee;
}

const getImageAltName = (path: string) => {
	const regex = /[\/][a-z|-]+\.svg/;
	const result = path.match(regex);

	if (result) {
		return result[0].replace('.svg', '').replace('/', '');
	}

	return '';
};

export function CoffeeDetails({ coffee }: CoffeeDetailsProps) {
	const { id, amount, description, details, imgSrc, name, price } = coffee;
	const dispatch = useDispatch();

	const money = priceFormatter.format(price);

	const value = extractValueAndSymbolFromMoney(money);

	function handleIncreaseAmount(id: string) {
		dispatch(coffeeActions.addCoffee({ id }));
	}

	function handleDecreaseAmount(id: string) {
		dispatch(coffeeActions.removeCoffee({ id }));
	}

	return (
		<Container>
			<img src={imgSrc} alt={getImageAltName(imgSrc)} />
			<PillShapesContainer>
				{details.map((detail, i) => (
					<span key={i}>{detail}</span>
				))}
			</PillShapesContainer>
			<h5>{name}</h5>
			<p>{description}</p>
			<PriceAndAmountContainer>
				<PriceLabels>
					<span>{value?.currency}</span>
					<span>{value?.amount}</span>
				</PriceLabels>

				<div>
					<AmountButtons
						id={id}
						amount={amount}
						onDecreaseAmount={handleDecreaseAmount}
						onIncreaseAmount={handleIncreaseAmount}
					/>

					<CartContainer>
						<ShoppingCart weight='fill' size={22} />
					</CartContainer>
				</div>
			</PriceAndAmountContainer>
		</Container>
	);
}
