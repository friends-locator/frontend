import PropTypes from 'prop-types';
import './Header.scss';
import { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import GeneralMenuPopup from '../GeneralMenuPopup/GeneralMenuPopup';

const Header = ({ handleSearch, className }) => {
	const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);
	const [isActiveOption, setIsActiveOption] = useState(false);
	const userStatus = useSelector((state) => state.user.status);

	const handleChange = (e) => {
		const searchTerm = e.target.value;
		handleSearch(searchTerm);
	};

	const handleChooseOption = useCallback(() => {
		setIsActiveOption(!isActiveOption);
	}, [isActiveOption]);

	return (
		<header className={className}>
			{/* @TODO вставить сюда меню когда оно будет готово */}
			<button
				className="header__menu"
				type="button"
				aria-label="Кнопка меню"
				onClick={() => setIsMenuPopupOpen(true)}
			/>
			{/* если нет пропса то только кнопка меню */}
			{handleSearch && (
				<input
					type="text"
					placeholder="Поиск друзей"
					onChange={handleChange}
					className="header__input"
				/>
			)}
			<GeneralMenuPopup
				isOpen={isMenuPopupOpen}
				onClose={() => setIsMenuPopupOpen(false)}
				userStatus={userStatus}
				chooseOption={handleChooseOption}
				isActiveOption={isActiveOption}
			/>
		</header>
	);
};

Header.propTypes = {
	handleSearch: PropTypes.func,
	className: PropTypes.string,
};

Header.defaultProps = {
	handleSearch: undefined,
	className: '',
};

export default Header;
