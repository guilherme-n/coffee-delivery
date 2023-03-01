import { NavLink, Outlet } from 'react-router-dom';
import { Wrapper, Location } from './styles';
import { MapPin, ShoppingCart } from 'phosphor-react';

import logo from '../assets/logo.svg';

export function DefaultLayout() {
	return (
		<>
			<Wrapper>
				<NavLink to='/'>
					<img src={logo} alt='logo' />
				</NavLink>

				<div>
					<Location>
						<MapPin size={22} weight='fill' />
						<span>Recife, PE</span>
					</Location>
					<NavLink to='/checkout'>
						<ShoppingCart size={22} weight='fill' />
					</NavLink>
				</div>
			</Wrapper>
			<Outlet />
		</>
	);
}
