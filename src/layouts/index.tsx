import { Outlet } from 'react-router-dom';
import { Wrapper, Location, Cart } from './styles';
import { MapPin, ShoppingCart } from 'phosphor-react';

import logo from '../assets/logo.svg';

export function DefaultLayout() {
	return (
		<>
			<Wrapper>
				<img src={logo} alt='logo' />
				<div>
					<Location>
						<MapPin size={22} weight='fill' />
						<span>Recife, PE</span>
					</Location>
					<Cart>
						<ShoppingCart size={22} weight='fill' />
					</Cart>
				</div>
			</Wrapper>
			<Outlet />
		</>
	);
}
