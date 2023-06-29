import PropTypes from 'prop-types';
import './Header.scss';

const Header = ({ handleSearch }) => {
	const handleChange = (e) => {
		const searchTerm = e.target.value;
		handleSearch(searchTerm);
	};

	return (
		<header className="header">
			{/* @TODO вставить сюда меню когда оно будет готово */}
			<div className="header__menu" />
			<input
				type="text"
				placeholder="Поиск друзей"
				onChange={handleChange}
				className="header__input"
			/>
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
