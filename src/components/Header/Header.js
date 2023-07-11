import PropTypes from 'prop-types';
import './Header.scss';

const Header = ({ handleSearch, className, setIsMenuPopupOpen }) => {
	const handleChange = (e) => {
		const searchTerm = e.target.value;
		handleSearch(searchTerm);
	};

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
		</header>
	);
};

Header.propTypes = {
	handleSearch: PropTypes.func,
	className: PropTypes.string,
	setIsMenuPopupOpen: PropTypes.func,
};

Header.defaultProps = {
	handleSearch: undefined,
	className: '',
	setIsMenuPopupOpen: undefined,
};

export default Header;
