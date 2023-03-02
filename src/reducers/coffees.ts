import produce from 'immer';
import { Coffee } from '../types/coffee';

export enum CoffeeActionTypes {
	ADD_COFFEE,
	REMOVE_COFFEE,
	REMOVE_ALL_COFFEES,
}

interface CoffeeAction {
	type: CoffeeActionTypes;
	payload: string;
}

export const coffeesReducer = (state: Coffee[], action: CoffeeAction) => {
	const { payload: id } = action;

	switch (action.type) {
		case CoffeeActionTypes.ADD_COFFEE:
			return produce(state, (draft) => {
				const indexOfCoffee = state.findIndex((c) => c.id === id);
				if (indexOfCoffee < 0) return draft;

				draft[indexOfCoffee].amount++;

				return draft;
			});

		case CoffeeActionTypes.REMOVE_COFFEE:
			return produce(state, (draft) => {
				const indexOfCoffee = state.findIndex((c) => c.id === id);
				if (indexOfCoffee < 0) return draft;

				draft[indexOfCoffee].amount--;

				return draft;
			});

		case CoffeeActionTypes.REMOVE_ALL_COFFEES:
			return produce(state, (draft) => {
				const indexOfCoffee = state.findIndex((c) => c.id === id);
				if (indexOfCoffee < 0) return draft;

				draft[indexOfCoffee].amount = 0;

				return draft;
			});
	}
};
