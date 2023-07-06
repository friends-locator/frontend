import React from 'react';
import PropTypes from 'prop-types';
import { Header, Footer } from '../components';
import { useUser } from '../context/AppContext';

export default function MainLayout({ handleSearch, className, children }) {
	const { currentUser } = useUser();

	return (
		<>
			<Header
				user={currentUser}
				handleSearch={handleSearch}
				className={className}
			/>
			{children}
			<Footer />
		</>
	);
}

MainLayout.propTypes = {
	handleSearch: PropTypes.func,
	className: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

MainLayout.defaultProps = {
	handleSearch: undefined,
};
