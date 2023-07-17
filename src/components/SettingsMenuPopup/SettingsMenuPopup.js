import PropTypes from 'prop-types';
import MenuPopup from '../MenuPopup/MenuPopup';
import './SettingsMenuPopup.scss';

function SettingsMenuPopup({ isOpen, onClose }) {
	return (
		<MenuPopup isOpen={isOpen} onClose={onClose}>
			<div className="settingsMenuPopup__header">
				<button
					className="settingsMenuPopup__button"
					aria-label="Вернуться в главное меню"
					onClick={onClose}
				/>
				<h1 className="settingsMenuPopup__title">Настройки</h1>
			</div>
		</MenuPopup>
	);
}

SettingsMenuPopup.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
};

export default SettingsMenuPopup;
