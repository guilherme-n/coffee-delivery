import {
	Coffee as CoffeeIcon,
	Package,
	ShoppingCart,
	Timer,
} from 'phosphor-react';
import coffeeCupSample from '../../assets/coffee-cup-sample.svg';
import { useCoffee } from '../../hooks/CoffeeContext';
import { CoffeeDeliveryAdvantages } from './components/CoffeeDeliveryAdvantages';
import { CoffeeDetails } from './components/CoffeeDetails';
import {
	CoffeeDeliveryAdvantagesList,
	CoffeeProductsAvailable,
	MainWrapper,
} from './styles';

export function Home() {
	const { coffees } = useCoffee();

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
							iconBgColor='YellowDark'
							text='Simple and safe shopping'
						/>
						<CoffeeDeliveryAdvantages
							icon={<Package color='white' weight='fill' />}
							iconBgColor='Gray'
							text='The package keeps the coffee intact'
						/>
						<CoffeeDeliveryAdvantages
							icon={<Timer color='white' weight='fill' />}
							iconBgColor='Yellow'
							text='Fast and tracked delivery'
						/>
						<CoffeeDeliveryAdvantages
							icon={<CoffeeIcon color='white' weight='fill' />}
							iconBgColor='Purple'
							text='You get the coffee pretty fresh'
						/>
					</CoffeeDeliveryAdvantagesList>
				</div>
				<img src={coffeeCupSample} />
			</MainWrapper>

			<CoffeeProductsAvailable>
				<h3>Our coffees</h3>
				<div>
					{coffees.map((coffee) => {
						return <CoffeeDetails key={coffee.id} coffee={coffee} />;
					})}
				</div>
			</CoffeeProductsAvailable>
		</main>
	);
}
