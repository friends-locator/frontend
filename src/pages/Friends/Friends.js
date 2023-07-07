import { useState } from 'react';
import { Button } from '../../components';
import { useUser } from '../../context/AppContext';
import MainLayout from '../../layouts/MainLayout';
import './Friends.scss';

export const Friends = () => {
	// @TODO Добавлять друзей из базы данных

	const { currentUser } = useUser();
	const [filteredFriends, setFilteredFriends] = useState(currentUser.friends);

	const handleSearch = (searchTerm) => {
		const filtered = currentUser.friends.filter((friend) =>
			friend.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setFilteredFriends(filtered);
	};

	const handleAddFriend = () => {
		// @TODO Логика для добавления новых друзей
	};

	return (
		<section className="friends">
			<MainLayout handleSearch={handleSearch} className="friends__header">
				<ul className="friends-list">
					{filteredFriends.map((friend) => (
						<li key={friend.id} className="friends-list__item">
							<img src={friend.avatar} alt={friend.name} />
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
			</MainLayout>
		</section>
	);
};
