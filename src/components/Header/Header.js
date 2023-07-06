import PropTypes from 'prop-types';
import './Header.scss';
import { useState } from "react";
import MenuPopup from "../MenuPopup/MenuPopup";

const Header = ({ handleSearch }) => {
	const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);

	const handleChange = (e) => {
		const searchTerm = e.target.value;
		handleSearch(searchTerm);
	};

	return (
		<header className="header">
			{/* @TODO вставить сюда меню когда оно будет готово */}
			<button
				className="header__menu"
				type='button'
				aria-label='Кнопка меню'
				onClick={()=> setIsMenuPopupOpen(true)}
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
			<MenuPopup
				isOpen={ isMenuPopupOpen }
				onClose={ ()=> setIsMenuPopupOpen(false) }/>
		</header>
	);
};

Header.propTypes = {
	handleSearch: PropTypes.func,
};

Header.defaultProps = {
	handleSearch: undefined,
};

export default Header;
