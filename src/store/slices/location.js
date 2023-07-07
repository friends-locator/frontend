/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const locationSlice = createSlice({
	name: 'location',
	initialState: {
		latitude: '',
		longitude: '',
		errorMessage: '',
	},
	reducers: {
		setLocation(state, action) {
			state.latitude = action.payload.latitude;
			state.longitude = action.payload.longitude;
			state.errorMessage = null;
		},
		setLocationError(state, action) {
			state.latitude = null;
			state.longitude = null;
			state.errorMessage = action.payload.errorMessage;
		},
	},
});

export default locationSlice.reducer;
export const { setLocation, setLocationError } = locationSlice.actions;
