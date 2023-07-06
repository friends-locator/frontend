import PropTypes from 'prop-types';
import './Header.scss';

const Header = ({ handleSearch, className }) => {
	const handleChange = (e) => {
		const searchTerm = e.target.value;
		handleSearch(searchTerm);
	};

	return (
		<header className={className}>
			{/* @TODO вставить сюда меню когда оно будет готово */}
			<div className="header__menu" />
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
};

Header.defaultProps = {
	handleSearch: undefined,
	className: '',
};

export default Header;
