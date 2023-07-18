/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { registerUser } from '../thunk/registerUser';

const userSlice = createSlice({
	name: 'user',
	initialState: {
		id: 0,
		first_name: '',
		last_name: '',
		username: '',
		gender: 'male',
		email: '',
		avatar: '',
		status: '',
		isLoading: false,
		errorMessage: '',
		registerSuccess: false,
	},
	// reducers: {
	// 	login(state) {
	// 		return {
	// 			...state,
	// 			loginLoading: true,
	// 		};
	// 	},
	// 	loginSuccess(state, action) {
	// 		return {
	// 			...state,
	// 			...action.payload,
	// 			loginLoading: false,
	// 			isAuthenticated: true,
	// 		};
	// 	},
	// 	loginFailed(state, action) {
	// 		return {
	// 			...state,
	// 			loginLoading: false,
	// 			errorMessage: action.payload.errorMessage,
	// 		};
	// 	},
	// 	logOut(state) {
	// 		return {
	// 			...state,
	// 			logOutLoading: true,
	// 		};
	// 	},
	// 	logOutSuccess(state) {
	// 		return {
	// 			...state,
	// 			logOutLoading: false,
	// 			isAuthenticated: false,
	// 		};
	// 	},
	// 	logOutFailed(state, action) {
	// 		return {
	// 			...state,
	// 			logOutLoading: false,
	// 			errorMessage: action.payload.errorMessage,
	// 		};
	// 	},
	// },
	extraReducers: (builder) => {
		builder.addCase(registerUser.pending, (state) => ({
			...state,
			isLoading: true,
		}));
		builder.addCase(registerUser.fulfilled, (state, action) => ({
			...state,
			...action.payload,
			isLoading: false,
			registerSuccess: true,
			errorMessage: '',
		}));
		builder.addCase(registerUser.rejected, (state, action) => ({
			...state,
			isLoading: false,
			errorMessage: action.payload.errorMessage,
			registerSuccess: false,
		}));
	},
});

export default userSlice.reducer;
