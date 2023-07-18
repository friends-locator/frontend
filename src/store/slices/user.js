/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { registerUser } from '../thunk/registerUser';
import { loginUser } from '../thunk/loginUser';

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
		isAuthenticated: false,
		access: '',
		refresh: '',
	},
	// reducers: {
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
			errorMessage: action.payload,
			registerSuccess: false,
		}));
		builder.addCase(loginUser.pending, (state) => ({
			...state,
			isLoading: true,
		}));
		builder.addCase(loginUser.fulfilled, (state, action) => ({
			...state,
			...action.payload,
			isLoading: false,
			isAuthenticated: true,
			errorMessage: '',
		}));
		builder.addCase(loginUser.rejected, (state, action) => ({
			...state,
			isLoading: false,
			errorMessage: action.payload,
			isAuthenticated: false,
		}));
	},
});

export default userSlice.reducer;
