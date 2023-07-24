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

export const setNickname = ({ username, token }) =>
	fetchTemplate({
		path: '/users/me/',
		method: 'PATCH',
		token: `Bearer ${token}`,
		body: {
			username,
		},
	});
