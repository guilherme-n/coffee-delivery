import './global.css';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/defaultTheme';
import { CoffeeProvider } from './hooks/CoffeeContext';

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<BrowserRouter>
				<CoffeeProvider>
					<Router />
				</CoffeeProvider>
			</BrowserRouter>
		</ThemeProvider>
	);
}
