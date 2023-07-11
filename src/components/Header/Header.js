import PropTypes from 'prop-types';
import InputSearch from '../InputSearch/InputSearch';
import './Header.scss';

const Header = ({ handleSearch, className, setIsMenuPopupOpen }) => (
	<header className={className}>
		{/* @TODO вставить сюда меню когда оно будет готово */}
		<button
			className="header__menu"
			type="button"
			aria-label="Кнопка меню"
			onClick={() => setIsMenuPopupOpen(true)}
		/>
		{/* если нет пропса то только кнопка меню */}
		{handleSearch && <InputSearch handleSearch={handleSearch} />}
	</header>
);

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
