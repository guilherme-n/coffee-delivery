import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store';

export const useCoffeeSelector: TypedUseSelectorHook<RootState> = useSelector;
