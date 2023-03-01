import { Minus, Plus, ShoppingCart } from 'phosphor-react';
import { Coffee } from '../../../../types/coffee';
import {
	Wrapper,
	PillShapesContainer,
	PriceAndAmountContainer,
	PriceLabels,
	AmountButtons,
	CartContainer,
} from './style';

interface CoffeeDetailsProps {
	coffee: Coffee;
	onDecreaseAmount: (id: string) => void;
	onIncreaseAmount: (id: string) => void;
}

const getImageAltName = (path: string) => {
	const regex = /[\/][a-z|-]+\.svg/;
	const result = path.match(regex);

	if (result) {
		return result[0].replace('.svg', '').replace('/', '');
	}

	return '';
};

const getPriceWithComma = (price: number) => {
	return price.toFixed(2).replace('.', ',');
};

export function CoffeeDetails({
	coffee,
	onDecreaseAmount,
	onIncreaseAmount,
}: CoffeeDetailsProps) {
	const { id, amount, description, details, imgSrc, name, price } = coffee;

	return (
		<Wrapper>
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
					<span>R$</span>
					<span>{getPriceWithComma(price)}</span>
				</PriceLabels>

				<div>
					<AmountButtons>
						<button
							disabled={amount === 0}
							onClick={() => onDecreaseAmount(id)}
						>
							<Minus weight='bold' size={14} />
						</button>
						<span>{amount}</span>
						<button onClick={() => onIncreaseAmount(id)}>
							<Plus weight='bold' size={14} />
						</button>
					</AmountButtons>

					<CartContainer>
						<ShoppingCart weight='fill' size={22} />
					</CartContainer>
				</div>
			</PriceAndAmountContainer>
		</Wrapper>
	);
}
