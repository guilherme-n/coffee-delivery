import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import { useTheme } from 'styled-components';
import coffeeCupSample from '../../assets/coffee-cup-sample.svg';
import { CoffeeDeliveryAdvantages } from './components/CoffeeDeliveryAdvantages';
import { CoffeeDetails } from './components/CoffeeDetails';
import {
	CoffeeDeliveryAdvantagesList,
	CoffeeProductsAvailable,
	MainWrapper,
} from './styles';

export function Home() {
	const theme = useTheme();

	return (
		<main>
			<MainWrapper>
				<div>
					<div>
						<h2>Find the perfect coffee</h2>
						<h2>to move you all day long</h2>
						<p>
							With Coffee Delivery, you can receive your coffee wherever you are
							at any time
						</p>
					</div>
					<CoffeeDeliveryAdvantagesList>
						<CoffeeDeliveryAdvantages
							icon={<ShoppingCart color='white' />}
							iconBgColor={theme['yellow-dark']}
							text='Simple and safe shopping'
						/>
						<CoffeeDeliveryAdvantages
							icon={<Package color='white' weight='fill' />}
							iconBgColor={theme['base-text']}
							text='The package keeps the coffee intact'
						/>
						<CoffeeDeliveryAdvantages
							icon={<Timer color='white' weight='fill' />}
							iconBgColor={theme['yellow']}
							text='Fast and tracked delivery'
						/>
						<CoffeeDeliveryAdvantages
							icon={<Coffee color='white' weight='fill' />}
							iconBgColor={theme['purple-dark']}
							text='You get the coffee pretty fresh'
						/>
					</CoffeeDeliveryAdvantagesList>
				</div>
				<img src={coffeeCupSample} />
			</MainWrapper>

			<CoffeeProductsAvailable>
				<h3>Our coffees</h3>
				<div>
					<CoffeeDetails />
					<CoffeeDetails />
					<CoffeeDetails />
					<CoffeeDetails />
					<CoffeeDetails />
					<CoffeeDetails />
					<CoffeeDetails />
					<CoffeeDetails />
					<CoffeeDetails />
				</div>
			</CoffeeProductsAvailable>
		</main>
	);
}
