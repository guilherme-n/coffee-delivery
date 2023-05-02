import { NavLink, Outlet } from 'react-router-dom';
import { MapPin, ShoppingCart } from 'phosphor-react';
import { Container, Location, CoffeesCountIcon } from './styles';

import logo from '../assets/logo.svg';
import { Coffee } from '../types/coffee';
import { useCoffeeSelector } from '../store/useCoffeeSelector';

const getCoffeesCount = (coffees: Coffee[]) => {
	return coffees
		.filter((c) => c.amount > 0)
		.reduce((prev, curr) => {
			return prev + curr.amount;
		}, 0);
};

export function DefaultLayout() {
	const coffees = useCoffeeSelector((state) => state);

	const coffeesCount = getCoffeesCount(coffees);

	return (
		<>
			<Container>
				<NavLink to='/'>
					<img src={logo} alt='logo' />
				</NavLink>

				<div>
					<Location>
						<MapPin size={22} weight='fill' />
						<span>Recife, PE</span>
					</Location>
					<NavLink to='/checkout'>
						{coffeesCount > 0 && (
							<CoffeesCountIcon>{coffeesCount}</CoffeesCountIcon>
						)}
						<ShoppingCart size={22} weight='fill' />
					</NavLink>
				</div>
			</Container>
			<Outlet />
		</>
	);
}
