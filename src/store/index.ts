import { configureStore, createSlice } from '@reduxjs/toolkit';
import { coffeesList } from '../pages/Home/seed';

export interface CoffeeAction {
	type: string;
	payload: string;
}

const slice = createSlice({
	initialState: coffeesList,
	name: 'coffees',
	reducers: {
		addCoffee(state, action) {
			const indexOfCoffee = state.findIndex((c) => c.id === action.payload.id);
			if (indexOfCoffee < 0) return state;

			state[indexOfCoffee].amount++;

			return state;
		},
		removeCoffee(state, action) {
			const indexOfCoffee = state.findIndex((c) => c.id === action.payload.id);
			if (indexOfCoffee < 0) return state;

			state[indexOfCoffee].amount--;

			return state;
		},
		removeAllCoffees(state, action) {
			const indexOfCoffee = state.findIndex((c) => c.id === action.payload.id);
			if (indexOfCoffee < 0) return state;

			state[indexOfCoffee].amount = 0;

			return state;
		},
		clearCart(state) {
			state.forEach((c) => {
				c.amount = 0;
			});
			return state;
		},
	},
});

export const coffeeActions = slice.actions;

export const store = configureStore({ reducer: slice.reducer });

export type RootState = ReturnType<typeof store.getState>;
