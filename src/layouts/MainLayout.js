import React, { useState, useCallback } from 'react';

import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
	Header,
	Footer,
	GeneralMenuPopup,
	SettingsMenuPopup,
} from '../components';
import { useUser } from '../context/AppContext';
import MenuPopup from '../components/MenuPopup/MenuPopup';
import PopupDeleteAccount from '../components/PopupDeleteAccount/PopupDeleteAccount';
import { deleteCurrentUser } from '../store/thunk/deleteCurrentUser';

export default function MainLayout({
	handleSearch,
	headerClassName,
	footerClassName,
	children,
}) {
	const { currentUser } = useUser();
	const dispatch = useDispatch();

	const [isGeneralMenuPopupOpen, setIsGeneralMenuPopupOpen] = useState(false);
	const [isSettingsMenuPopupOpen, setIsSettingsMenuPopupOpen] = useState(false);
	const [isPopupDeleteAccountOpen, setIsPopupDeleteAccountOpen] =
		useState(false);
	const [isActiveInvisible, setIsActiveInvisible] = useState(false);
	const [isActiveNightTheme, setIsActiveNightTheme] = useState(false);
	const [isDeleteUserPasswordError, setIsDeleteUserPasswordError] =
		useState(false);

	const userStatus = useSelector((state) => state.user.status);
	const { deleteUserPasswordError, deleteSuccess } = useSelector(
		(state) => state.user
	);

	const handleOpenGeneralMenuPopup = useCallback(() => {
		setIsGeneralMenuPopupOpen(true);
	}, []);

	const handleOpenSettingsMenuPopup = useCallback(() => {
		setIsSettingsMenuPopupOpen(true);
	}, []);

	const handleOpenPopupDeleteAccount = useCallback(() => {
		setIsPopupDeleteAccountOpen(true);
	}, []);

	const closeAllPopups = useCallback(() => {
		setIsGeneralMenuPopupOpen(false);
		setIsSettingsMenuPopupOpen(false);
	}, []);

	const closeSettingsMenuPopup = useCallback(() => {
		setIsSettingsMenuPopupOpen(false);
	}, []);

	const closePopupDeleteAccount = useCallback(() => {
		setIsPopupDeleteAccountOpen(false);
		setTimeout(() => {
			setIsDeleteUserPasswordError(false);
		}, 500);
	}, []);

	const toggleInvisibleOption = useCallback(() => {
		setIsActiveInvisible(!isActiveInvisible);
	}, [isActiveInvisible]);

	const toggleNightThemeOption = useCallback(() => {
		setIsActiveNightTheme(!isActiveNightTheme);
	}, [isActiveNightTheme]);

	// TODO показать попап, что аккаунт удален
	const handleDeleteAccount = useCallback(
		(password) => {
			const token = localStorage.getItem('access_token');
			if (token) {
				dispatch(deleteCurrentUser({ token, password }));
				// localStorage.clear();
				if (!deleteSuccess) {
					setIsDeleteUserPasswordError(true);
				}
			} else {
				console.log('токена нет');
			}
		},
		[dispatch, deleteSuccess]
	);

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

			{!isSettingsMenuPopupOpen && (
				<MenuPopup isOpen={isGeneralMenuPopupOpen} onClose={closeAllPopups}>
					<GeneralMenuPopup
						onClose={closeAllPopups}
						userStatus={userStatus}
						chooseInvisible={toggleInvisibleOption}
						isActiveInvisible={isActiveInvisible}
						openSettingsMenuPopup={handleOpenSettingsMenuPopup}
					/>
				</MenuPopup>
			)}
			<MenuPopup isOpen={isSettingsMenuPopupOpen} onClose={closeAllPopups}>
				<SettingsMenuPopup
					onClose={closeSettingsMenuPopup}
					chooseNightTheme={toggleNightThemeOption}
					isActiveNightTheme={isActiveNightTheme}
					deleteAccount={handleOpenPopupDeleteAccount}
					isOpen={isPopupDeleteAccountOpen}
					onClose2={closePopupDeleteAccount}
				/>
			</MenuPopup>

			<PopupDeleteAccount
				isOpen={isPopupDeleteAccountOpen}
				onClose={closePopupDeleteAccount}
				deleteAccount={handleDeleteAccount}
				isDeleteUserPasswordError={isDeleteUserPasswordError}
				deleteUserPasswordError={deleteUserPasswordError}
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
