import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useContext,
	useState,
} from 'react';
import { coffeesList } from '../pages/Home/seed';
import { Coffee } from '../types/coffee';

interface CoffeeContextType {
	coffees: Coffee[];
	setCoffees: Dispatch<SetStateAction<Coffee[]>>;
}

const CoffeesContext = createContext({} as CoffeeContextType);

interface CoffeeProviderProps {
	children: ReactNode;
}

export const CoffeeProvider = ({ children }: CoffeeProviderProps) => {
	const [coffees, setCoffees] = useState(coffeesList);

	return (
		<CoffeesContext.Provider value={{ coffees, setCoffees }}>
			{children}
		</CoffeesContext.Provider>
	);
};

export const useCoffee = () => useContext(CoffeesContext);
