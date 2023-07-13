import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: {
		id: 0,
		name: '',
		surname: '',
		nickname: '',
		sex: 'male',
		email: '',
		avatar: '',
		status: '',
		loginLoading: false,
		signUpLoading: false,
		logOutLoading: false,
		errorMessage: '',
	},
	reducers: {
		login(state) {
			return {
				...state,
				loginLoading: true,
			};
		},
		loginSuccess(state, action) {
			return {
				...state,
				...action.payload,
				loginLoading: false,
			};
		},
		loginFailed(state, action) {
			return {
				...state,
				loginLoading: false,
				errorMessage: action.payload.errorMessage,
			};
		},
		signUp(state) {
			return {
				...state,
				signUpLoading: true,
			};
		},
		signUpSuccess(state, action) {
			return {
				...state,
				...action.payload,
				signUpLoading: false,
			};
		},
		signUpFailed(state, action) {
			return {
				...state,
				signUpLoading: false,
				errorMessage: action.payload.errorMessage,
			};
		},
		logOut(state) {
			return {
				...state,
				logOutLoading: true,
			};
		},
		logOutSuccess(state) {
			return {
				...state,
				logOutLoading: false,
			};
		},
		logOutFailed(state, action) {
			return {
				...state,
				logOutLoading: false,
				errorMessage: action.payload.errorMessage,
			};
		},
	},
});

export default userSlice.reducer;
export const {
	login,
	loginFailed,
	loginSuccess,
	logOut,
	logOutFailed,
	logOutSuccess,
	signUp,
	signUpFailed,
	signUpSuccess,
} = userSlice.actions;
