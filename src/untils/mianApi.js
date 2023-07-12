import { fetchTemplate } from '../constants';

export const register = ({
	email,
	username,
	firstName,
	lastName,
	password,
	gender,
}) =>
	fetchTemplate('/users', 'POST', {
		email,
		username,
		first_name: firstName,
		last_name: lastName,
		password,
		gender,
	});
