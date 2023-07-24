import { createSlice } from '@reduxjs/toolkit';
import { registerUser } from '../thunk/registerUser';
import { loginUser } from '../thunk/loginUser';
import { getCurrentUser } from '../thunk/getCurrentUser';
import { refreshToken } from '../thunk/refreshToken';
import { deleteCurrentUser } from '../thunk/deleteCurrentUser';

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
		requestCounter: 0,
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
			requestCounter: state.requestCounter + 1,
		}));
		builder.addCase(registerUser.rejected, (state, action) => ({
			...state,
			isLoading: false,
			errorMessage: action.payload,
			registerSuccess: false,
			requestCounter: state.requestCounter + 1,
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
			requestCounter: state.requestCounter + 1,
		}));
		builder.addCase(loginUser.rejected, (state, action) => ({
			...state,
			isLoading: false,
			errorMessage: action.payload,
			isAuthenticated: false,
			requestCounter: state.requestCounter + 1,
		}));
		builder.addCase(getCurrentUser.pending, (state) => ({
			...state,
			isLoading: true,
		}));
		builder.addCase(getCurrentUser.fulfilled, (state, action) => ({
			...state,
			...action.payload,
			isLoading: false,
			isAuthenticated: true,
			errorMessage: '',
		}));
		builder.addCase(getCurrentUser.rejected, (state, action) => ({
			...state,
			isLoading: false,
			errorMessage: action.payload,
			isAuthenticated: false,
		}));
		builder.addCase(refreshToken.pending, (state) => ({
			...state,
			isLoading: true,
		}));
		builder.addCase(refreshToken.fulfilled, (state, action) => ({
			...state,
			...action.payload,
			isLoading: false,
			errorMessage: '',
		}));
		builder.addCase(refreshToken.rejected, (state, action) => ({
			...state,
			isLoading: false,
			errorMessage: action.payload,
		}));
		builder.addCase(deleteCurrentUser.pending, (state) => ({
			...state,
			isLoading: true,
		}));
		builder.addCase(deleteCurrentUser.fulfilled, (state, action) => ({
			...state,
			...action.payload,
			isLoading: false,
			isAuthenticated: false,
			errorMessage: '',
		}));
		builder.addCase(deleteCurrentUser.rejected, (state, action) => ({
			...state,
			isLoading: false,
			errorMessage: action.payload,
			isAuthenticated: true,
		}));
	},
});

export default userSlice.reducer;
