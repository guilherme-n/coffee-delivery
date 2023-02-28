import { Minus, Plus, ShoppingCart } from 'phosphor-react';
import { useTheme } from 'styled-components';
import mocaccino from '../../../../assets/coffeeTypes/mocaccino.svg';
import {
	Wrapper,
	PillShapesContainer,
	PriceAndAmountContainer,
	PriceLabels,
	AmountButtons,
	CartContainer,
} from './style';

export function CoffeeDetails() {
	const theme = useTheme();

	return (
		<Wrapper>
			<img src={mocaccino} alt='mocaccino' />
			<PillShapesContainer>
				<span>traditional</span>
				<span>with milk</span>
			</PillShapesContainer>
			<h5>Mocaccino</h5>
			<p>Express coffee with chocolate syrup, some milk and foam</p>
			<PriceAndAmountContainer>
				<PriceLabels>
					<span>R$</span>
					<span>9,90</span>
				</PriceLabels>

				<div>
					<AmountButtons>
						<button>
							<Minus weight='bold' size={14} />
						</button>
						<span>1</span>
						<button>
							<Plus weight='bold' size={14} />
						</button>
					</AmountButtons>

					<CartContainer>
						<ShoppingCart weight='fill' color={theme.white} size={22} />
					</CartContainer>
				</div>
			</PriceAndAmountContainer>
		</Wrapper>
	);
}
