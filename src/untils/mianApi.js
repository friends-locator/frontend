/* eslint-disable no-undef */
import { fetchTemplate } from '../constants';

export const register = ({ email, nickname, name, surname, password, sex }) =>
	fetchTemplate({
		path: '/users/',
		method: 'POST',
		body: {
			email,
			username: nickname,
			first_name: name,
			last_name: surname,
			password,
			gender: sex,
		},
	});

export const login = ({ email, password }) =>
	fetchTemplate({
		path: '/jwt/create/',
		method: 'POST',
		body: {
			email,
			password,
		},
	});

export const getCurrentUser = (token) =>
	fetchTemplate({
		path: '/users/me/',
		method: 'GET',
		token: `Bearer ${token}`,
	});

export const refreshToken = (token) =>
	fetchTemplate({
		path: '/jwt/refresh/',
		method: 'POST',
		body: {
			refresh: token,
		},
	});

export const verifyToken = (token) =>
	fetchTemplate({
		path: '/jwt/verify/',
		method: 'POST',
		body: {
			token,
		},
	});

export const getTags = () =>
	fetchTemplate({
		path: '/tags/',
		method: 'GET',
	});

export const getTagById = (id) =>
	fetchTemplate({
		path: `/tags/${id}/`,
		method: 'GET',
	});

export const getUsers = () =>
	fetchTemplate({
		path: '/users/',
		method: 'GET',
	});

export const getAllRequests = () =>
	fetchTemplate({
		path: '/users/all-requests/',
		method: 'GET',
	});

export const getFriends = () =>
	fetchTemplate({
		path: '/users/friends/',
		method: 'GET',
	});

export const getFriendsData = () =>
	fetchTemplate({
		path: '/users/get-friends/',
		method: 'GET',
	});

export const updateUserProfile = (userData) =>
	fetchTemplate({
		path: '/users/me/',
		method: 'PUT',
		body: JSON.stringify(userData),
	});

export const updateUserDetails = (userData) =>
	fetchTemplate({
		path: '/users/me/',
		method: 'PATCH',
		body: JSON.stringify(userData),
	});

export const deleteUserProfile = () =>
	fetchTemplate({
		path: '/users/me/',
		method: 'DELETE',
	});

export const resendActivationEmail = ({ email }) =>
	fetchTemplate({
		path: '/users/resend_activation/',
		method: 'POST',
		body: { email },
	});

export const resetEmail = ({ email }) =>
	fetchTemplate({
		path: '/users/reset_email/',
		method: 'POST',
		body: { email },
	});

export const confirmResetEmail = ({ email }) =>
	fetchTemplate({
		path: '/users/reset_email_confirm/',
		method: 'POST',
		body: { new_email: email },
	});

export const resetPassword = ({ password }) =>
	fetchTemplate({
		path: '/users/reset_password/',
		method: 'POST',
		body: {
			password,
		},
	});
