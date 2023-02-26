import { Outlet } from 'react-router-dom';
import { Wrapper } from './styles';

import logo from '../assets/logo.svg';

export function DefaultLayout() {
	return (
		<>
			<Wrapper>
				<img src={logo} alt='logo' />
			</Wrapper>
			<Outlet />
		</>
	);
}
