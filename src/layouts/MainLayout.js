import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Header, Footer } from '../components';
import { useUser } from '../context/AppContext';

export default function MainLayout({ children }) {
	const { currentUser } = useUser();

	const [filteredFriends, setFilteredFriends] = useState(currentUser.friends);
	console.log(filteredFriends);
	const handleSearch = (searchTerm) => {
		const filtered = currentUser.friends.filter((friend) =>
			friend.name.toLowerCase().includes(searchTerm.toLowerCase())
		);

		setFilteredFriends(filtered);
	};

	return (
		<>
			<Header handleSearch={handleSearch} />
			{children}
			<Footer />
		</>
	);
}

MainLayout.propTypes = {
	children: PropTypes.node.isRequired,
};
