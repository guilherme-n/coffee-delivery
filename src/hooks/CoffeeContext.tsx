import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useReducer,
} from 'react';
import { coffeesList } from '../pages/Home/seed';
// import { coffeesReducer, CoffeeActionTypes } from '../reducers/coffees';
import { Coffee } from '../types/coffee';

const COFFEES_LOCAL_STORAGE_KEY = '@coffee-delivery:coffees-state-1.0';

interface CoffeeContextType {
	coffees: Coffee[];
	addCoffee: (id: string) => void;
	removeCoffee: (id: string) => void;
	removeAllCoffees: (id: string) => void;
	clearCart: () => void;
}

const CoffeesContext = createContext({} as CoffeeContextType);

interface CoffeeProviderProps {
	children: ReactNode;
}

// const CoffeeProvider = ({ children }: CoffeeProviderProps) => {
// 	const [coffees, dispatch] = useReducer(
// 		coffeesReducer,
// 		coffeesList,
// 		(c: Coffee[]) => {
// 			const data = localStorage.getItem(COFFEES_LOCAL_STORAGE_KEY);

// 			if (data) {
// 				return JSON.parse(data);
// 			}
// 			return c;
// 		}
// 	);

// 	useEffect(() => {
// 		localStorage.setItem(COFFEES_LOCAL_STORAGE_KEY, JSON.stringify(coffees));
// 	}, coffees);

// 	const addCoffee = (coffee: string) => {
// 		dispatch({ type: CoffeeActionTypes.ADD_COFFEE, payload: coffee });
// 	};

// 	const removeCoffee = (coffee: string) => {
// 		dispatch({ type: CoffeeActionTypes.REMOVE_COFFEE, payload: coffee });
// 	};

// 	const removeAllCoffees = (coffee: string) => {
// 		dispatch({ type: CoffeeActionTypes.REMOVE_ALL_COFFEES, payload: coffee });
// 	};

// 	const clearCart = () => {
// 		dispatch({ type: CoffeeActionTypes.CLEAR_CART, payload: '' });
// 	};

// 	return (
// 		<CoffeesContext.Provider
// 			value={{
// 				coffees,
// 				addCoffee,
// 				removeCoffee,
// 				removeAllCoffees,
// 				clearCart,
// 			}}
// 		>
// 			{children}
// 		</CoffeesContext.Provider>
// 	);
// };

const useCoffee = () => useContext(CoffeesContext);
