import { configureStore } from '@reduxjs/toolkit';
import capsuleReducer from './capsuleSlice';

export const store = configureStore({
	reducer: { capsules: capsuleReducer },
});
