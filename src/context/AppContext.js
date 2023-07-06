import { createContext, useState, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import avatarMale from '../images/friend-avatar-male.png';
import avatarFemale from '../images/friend-avatar-female.png';

export const AppContext = createContext();

// Контекст пользователя
export function AppContextProvider({ children }) {
	const [currentUser, setCurrentUser] = useState({
		firstName: 'Екатерина',
		lastName: 'Иванова',
		nickname: 'Ivanova123',
		status: '',
		sex: 'female',
		friends: [
			{ id: 1, name: 'Николай Иронов', sex: 'male', avatar: `${avatarMale}` },
			{
				id: 2,
				name: 'Мария Строгих',
				sex: 'female',
				avatar: `${avatarFemale}`,
			},
			{ id: 3, name: 'Анна Лейтман', sex: 'female', avatar: `${avatarFemale}` },
			{ id: 4, name: 'Виктор Дробыш', sex: 'male', avatar: `${avatarMale}` },
		],
	});

	const contextValue = useMemo(
		() => ({ currentUser, setCurrentUser }),
		[currentUser, setCurrentUser]
	);

	return (
		<AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
	);
}

// Хук для получения текущего пользователя и функции для его изменения
export function useUser() {
	const { currentUser, setCurrentUser } = useContext(AppContext);
	return { currentUser, setCurrentUser };
}

AppContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
