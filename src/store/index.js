import { combineReducers, configureStore } from '@reduxjs/toolkit';
import locationSlice from './slices/location';

const rootReducer = combineReducers({
	location: locationSlice,
});

export const store = configureStore({
	reducer: rootReducer,
});
