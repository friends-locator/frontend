/* eslint-disable no-param-reassign */
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
			state.loginLoading = true;
		},
		loginSuccess(state, action) {
			state.loginLoading = false;
			// state.id = action.payload.id;
			// state.name = action.payload.id;
			// state.surname = action.payload.id;
			// state.nickname = action.payload.id;
			// state.sex = action.payload.id;
			// state.email = action.payload.id;
			state = {
				...state,
				...action.payload,
			};
		},
		loginFailed(state, action) {
			state.loginLoading = false;
			state.errorMessage = action.payload.errorMessage;
		},
		signUp(state) {
			state.signUpLoading = true;
		},
		signUpSuccess(state, action) {
			state.signUpLoading = false;
			state = {
				...state,
				...action.payload,
			};
		},
		signUpFailed(state, action) {
			state.signUpLoading = false;
			state.errorMessage = action.payload.errorMessage;
		},
		logOut(state) {
			state.logOutLoading = true;
		},
		logOutSuccess(state) {
			state.logOutLoading = false;
		},
		logOutFailed(state, action) {
			state.logOutLoading = false;
			state.errorMessage = action.payload.errorMessage;
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
