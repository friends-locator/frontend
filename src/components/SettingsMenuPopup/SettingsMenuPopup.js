import PropTypes from 'prop-types';
import MenuPopup from '../MenuPopup/MenuPopup';
import './SettingsMenuPopup.scss';
import Checkbox from '../Checkbox/Checkbox';

function SettingsMenuPopup({
	isOpen,
	onClose,
	chooseNightTheme,
	isActiveNightTheme,
}) {
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
			<div className="settingsMenuPopup__checkbox-container">
				<Checkbox
					option="Тёмная тема"
					chooseOption={chooseNightTheme}
					isActiveOption={isActiveNightTheme}
				/>
			</div>
		</MenuPopup>
	);
}

SettingsMenuPopup.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	isActiveNightTheme: PropTypes.bool.isRequired,
	chooseNightTheme: PropTypes.func.isRequired,
};

export default SettingsMenuPopup;
