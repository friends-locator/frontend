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
}) {
	const { currentUser } = useUser();

	const [isGeneralMenuPopupOpen, setIsGeneralMenuPopupOpen] = useState(false);
	const [isActiveInvisible, setIsActiveInvisible] = useState(false);
	const userStatus = useSelector((state) => state.user.status);

	const handleOpenGeneralMenuPopup = useCallback(() => {
		setIsGeneralMenuPopupOpen(true);
	}, [isGeneralMenuPopupOpen]);

	const closeAllPopups = useCallback(() => {
		setIsGeneralMenuPopupOpen(false);
	}, [isGeneralMenuPopupOpen]);

	const toggleInvisibleOption = useCallback(() => {
		setIsActiveInvisible(!isActiveInvisible);
	}, [isActiveInvisible]);

	return (
		<>
			<Header
				user={currentUser}
				handleSearch={handleSearch}
				className={headerClassName}
				openGeneralMenuPopup={handleOpenGeneralMenuPopup}
			/>
			{children}
			<Footer className={footerClassName} />
			<GeneralMenuPopup
				isOpen={isGeneralMenuPopupOpen}
				onClose={closeAllPopups}
				userStatus={userStatus}
				chooseInvisible={toggleInvisibleOption}
				isActiveInvisible={isActiveInvisible}
			/>
		</>
	);
}

MainLayout.propTypes = {
	handleSearch: PropTypes.func,
	headerClassName: PropTypes.string,
	footerClassName: PropTypes.string,
	children: PropTypes.node.isRequired,
};

MainLayout.defaultProps = {
	handleSearch: undefined,
	headerClassName: '',
	footerClassName: '',
};
