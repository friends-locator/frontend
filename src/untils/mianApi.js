import { fetchTemplate } from '../constants';

export const register = ({ email, nickname, name, surname, password, sex }) =>
	fetchTemplate('/users/', 'POST', {
		email,
		username: nickname,
		first_name: name,
		last_name: surname,
		password,
		gender: sex,
	});

export const login = ({ email, password }) => {
	fetchTemplate('/jwt/create/', 'GET', {
		email,
		password,
	});
};
