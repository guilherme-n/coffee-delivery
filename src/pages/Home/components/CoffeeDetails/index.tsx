import { ShoppingCart } from 'phosphor-react';
import { AmountButtons } from '../../../../components/AmountButtons';
import { useCoffee } from '../../../../hooks/CoffeeContext';
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
	const { addCoffee, removeCoffee } = useCoffee();

	const money = priceFormatter.format(price);

	const value = extractValueAndSymbolFromMoney(money);

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
						onDecreaseAmount={removeCoffee}
						onIncreaseAmount={addCoffee}
					/>

					<CartContainer>
						<ShoppingCart weight='fill' size={22} />
					</CartContainer>
				</div>
			</PriceAndAmountContainer>
		</Container>
	);
}
