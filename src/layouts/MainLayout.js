import React from 'react';
import PropTypes from 'prop-types';
import { Header, Footer } from '../components';
import { useUser } from '../context/AppContext';

export default function MainLayout({
	handleSearch,
	headerClassName,
	footerClassName,
	children,
	activeTab,
}) {
	const { currentUser } = useUser();

	return (
		<>
			<Header
				user={currentUser}
				handleSearch={handleSearch}
				className={headerClassName}
			/>
			{children}
			<Footer className={footerClassName} activeTab={activeTab} />
		</>
	);
}

MainLayout.propTypes = {
	handleSearch: PropTypes.func,
	headerClassName: PropTypes.string,
	footerClassName: PropTypes.string,
	children: PropTypes.node.isRequired,
	activeTab: PropTypes.oneOf(['map', 'chat', 'friends']).isRequired,
};

MainLayout.defaultProps = {
	handleSearch: undefined,
	headerClassName: '',
	footerClassName: '',
};
