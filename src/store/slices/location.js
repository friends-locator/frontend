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
			return {
				...state,
				latitude: action.payload.latitude,
				longitude: action.payload.longitude,
				errorMessage: '',
			};
		},
		setLocationError(state, action) {
			return {
				...state,
				latitude: '',
				longitude: '',
				errorMessage: action.payload.errorMessage,
			};
		},
	},
});

export default locationSlice.reducer;
export const { setLocation, setLocationError } = locationSlice.actions;
