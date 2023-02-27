import { ShoppingCart } from 'phosphor-react';
import mocaccino from '../../../../assets/coffeTypes/mocaccino.svg';

export function CoffeeDetails() {
	return (
		<div>
			<img src={mocaccino} alt='mocaccino' />
			<div>
				<span>tradicional</span>
				<span>com leite</span>
			</div>
			<h5>Mocaccino</h5>
			<p>Cafe expresso com caida de chocolate, pouco leite e espuma</p>
			<div>
				<span>R$ 9,90</span>
				<div>
					<span>-</span>
					<span>1</span>
					<span>+</span>
				</div>
				<div>
					<ShoppingCart />
				</div>
			</div>
		</div>
	);
}
