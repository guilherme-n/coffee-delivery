import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import { useTheme } from 'styled-components';
import coffeeCupSample from '../../assets/coffee-cup-sample.svg';
import { CoffeeDeliveryAdvantages } from './components/CoffeeDeliveryAdvantages';
import { CoffeeDeliveryAdvantagesList, MainWrapper } from './styles';

export function Home() {
	const theme = useTheme();
	return (
		<main>
			<MainWrapper>
				<div>
					<h2>Find the perfect coffee to move you all day long</h2>
					<p>
						With Coffee Delivery, you can receive your coffee wherever you are
						at any timeeeeeeeeee
					</p>
					<CoffeeDeliveryAdvantagesList>
						<CoffeeDeliveryAdvantages
							icon={<ShoppingCart color='white' />}
							iconBgColor={theme['yellow-dark']}
							text='Simple and safe shopping'
						/>
						<CoffeeDeliveryAdvantages
							icon={<Package color='white' weight='fill' />}
							iconBgColor={theme['base-text']}
							text='Package keeps the coffee intact'
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
		</main>
	);
}
