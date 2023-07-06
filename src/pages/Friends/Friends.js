import { useState } from 'react';
import { Button, Header, Footer } from '../../components';
import avatarMale from '../../images/icon_profile_man.png';
import avatarFemale from '../../images/icon_profile_woman.png';
import './Friends.scss';

export const Friends = () => {
	// @TODO Добавлять друзей из базы данных
	const friends = [
		{ id: 1, name: 'Николай Иронов', avatar: avatarMale },
		{ id: 2, name: 'Мария Строгих', avatar: avatarFemale },
		{ id: 3, name: 'Анна Лейтман', avatar: avatarFemale },
		{ id: 4, name: 'Виктор Дробыш', avatar: avatarMale },
	];

	const [filteredFriends, setFilteredFriends] = useState(friends);

	const handleSearch = (searchTerm) => {
		const filtered = friends.filter((friend) =>
			friend.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setFilteredFriends(filtered);
	};

	const handleAddFriend = () => {
		// @TODO Логика для добавления новых друзей
	};

	return (
		<section className="friends">
			<Header handleSearch={handleSearch} className="friends__header" />
			<ul className="friends-list">
				{filteredFriends.map((friend) => (
					<li key={friend.id} className="friends-list__item">
						<img
							src={friend.avatar}
							alt={friend.name}
							className="friends-list__item-img"
						/>
						<span>{friend.name}</span>
					</li>
				))}
			</ul>
			<div className="friends__btn-container">
				<Button
					label="Добавить новых друзей"
					type="button"
					color="secondary"
					size="large"
					onClick={handleAddFriend}
					className="friends__add-btn"
				/>
			</div>
			<Footer />
		</section>
	);
};
