import './global.css';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/defaultTheme';
// import { CoffeeProvider } from './hooks/CoffeeContext';
import { FormAddressProvider } from './hooks/FormAddressContext';
import { Provider } from 'react-redux';
import { store } from './store';

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<BrowserRouter>
				<Provider store={store}>
					<FormAddressProvider>
						<Router />
					</FormAddressProvider>
				</Provider>
			</BrowserRouter>
		</ThemeProvider>
	);
}
