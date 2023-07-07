import avatarMale from '../images/icon_profile_man.png';
import avatarFemale from '../images/icon_profile_woman.png';

export const userData = {
	id: 1,
	name: 'Екатерина',
	surname: 'Иванова',
	nickname: 'Ivanova123',
	sex: 'female',
	email: '123@mail.ru',
	avatar:
		'https://www.funtastik.by/upload/iblock/9c6/9c653df6440b9f5c8476b708f574d796.jpg',
	status: '',
	friends: [
		{
			id: 1,
			name: 'Николай Иронов',
			sex: 'male',
			avatar: `${avatarMale}`,
		},
		{
			id: 2,
			name: 'Мария Строгих',
			sex: 'female',
			avatar: `${avatarFemale}`,
		},
		{
			id: 3,
			name: 'Анна Лейтман',
			sex: 'female',
			avatar: `${avatarFemale}`,
		},
		{
			id: 4,
			name: 'Виктор Дробыш',
			sex: 'male',
			avatar: `${avatarMale}`,
		},
	],
};
