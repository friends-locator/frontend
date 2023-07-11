import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Header, Footer, GeneralMenuPopup } from '../components';
import { useUser } from '../context/AppContext';

export default function MainLayout({
	handleSearch,
	headerClassName,
	footerClassName,
	children,
	activeTab,
}) {
	const { currentUser } = useUser();

	const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);
	const [isActiveOption, setIsActiveOption] = useState(false);
	const userStatus = useSelector((state) => state.user.status);

	const handleChooseOption = useCallback(() => {
		setIsActiveOption(!isActiveOption);
	}, [isActiveOption]);

	return (
		<>
			<Header
				user={currentUser}
				handleSearch={handleSearch}
				className={headerClassName}
				setIsMenuPopupOpen={setIsMenuPopupOpen}
			/>
			{children}
			<Footer className={footerClassName} activeTab={activeTab} />
			<GeneralMenuPopup
				isOpen={isMenuPopupOpen}
				onClose={() => setIsMenuPopupOpen(false)}
				userStatus={userStatus}
				chooseOption={handleChooseOption}
				isActiveOption={isActiveOption}
			/>
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
