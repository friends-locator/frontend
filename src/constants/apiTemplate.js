const BASE_URL = 'https://flap.acceleratorpracticum.ru/api/v1/';
const checkAnswer = (res) =>
	res.ok ? res.json() : Promise.reject(new Error(`Ошибка: ${res.statusText}`));

export const fetchTemplate = (path, method, body, token = '') =>
	fetch(`${BASE_URL}${path}`, {
		method,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: token,
		},
		body: JSON.stringify(body),
	}).then(checkAnswer);
