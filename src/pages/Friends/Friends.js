import { useState } from 'react';
import { Button, PopupAddFriend } from '../../components';
import { useUser } from '../../context/AppContext';
import MainLayout from '../../layouts/MainLayout';
import './Friends.scss';

export const Friends = () => {
	// @TODO Добавлять друзей из базы данных

	const { currentUser } = useUser();
	const [addFreindsPopupOpened, setAddFreindsPopupOpened] = useState(false);
	const [filteredFriends, setFilteredFriends] = useState(currentUser.friends);

	const handleSearch = (searchTerm) => {
		const filtered = currentUser.friends.filter((friend) =>
			friend.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setFilteredFriends(filtered);
	};

	const handleAddFriend = () => {
		setAddFreindsPopupOpened(true);
	};

	return (
		<section className="friends">
			<MainLayout handleSearch={handleSearch} className="friends__header">
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
			</MainLayout>
			<PopupAddFriend
				isOpen={addFreindsPopupOpened}
				onClose={() => setAddFreindsPopupOpened(false)}
			/>
		</section>
	);
};
