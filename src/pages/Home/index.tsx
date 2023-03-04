import {
	Coffee as CoffeeIcon,
	Package,
	ShoppingCart,
	Timer,
} from 'phosphor-react';
import coffeeCupSample from '../../assets/coffee-cup-sample.svg';
import { useCoffee } from '../../hooks/CoffeeContext';
import { CoffeeDetails } from './components/CoffeeDetails';
import { IconWithOneOrTwoLines } from '../../components/IconWithOneOrTwoTexts';
import {
	CoffeeDeliveryAdvantagesList,
	CoffeeProductsAvailable,
	MainContainer,
} from './styles';

export function Home() {
	const { coffees } = useCoffee();

	return (
		<main>
			<MainContainer>
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
						<IconWithOneOrTwoLines
							icon={<ShoppingCart />}
							iconBgColor='YellowDark'
							text='Simple and safe shopping'
						/>
						<IconWithOneOrTwoLines
							icon={<Package weight='fill' />}
							iconBgColor='Gray'
							text='The package keeps the coffee intact'
						/>
						<IconWithOneOrTwoLines
							icon={<Timer weight='fill' />}
							iconBgColor='Yellow'
							text='Fast and tracked delivery'
						/>
						<IconWithOneOrTwoLines
							icon={<CoffeeIcon weight='fill' />}
							iconBgColor='Purple'
							text='You get the coffee pretty fresh'
						/>
					</CoffeeDeliveryAdvantagesList>
				</div>
				<img src={coffeeCupSample} />
			</MainContainer>

			<CoffeeProductsAvailable>
				<h3>Our coffees</h3>
				<div>
					{coffees.map((coffee) => (
						<CoffeeDetails key={coffee.id} coffee={coffee} />
					))}
				</div>
			</CoffeeProductsAvailable>
		</main>
	);
}
