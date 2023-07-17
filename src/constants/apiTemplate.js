const BASE_URL = 'https://flap.acceleratorpracticum.ru/api/v1';

export const fetchTemplate = (path, method, body, token = '') =>
	fetch(`${BASE_URL}${path}`, {
		method,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: token,
		},
		body: JSON.stringify(body),
	});
