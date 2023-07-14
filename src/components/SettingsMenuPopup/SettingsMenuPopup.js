import PropTypes from 'prop-types';
import MenuPopup from '../MenuPopup/MenuPopup';

function SettingsMenuPopup({ isOpen, onClose }) {
	return (
		<MenuPopup isOpen={isOpen} onClose={onClose}>
			<div className="settingsMenuPopup__container">fghjkl;</div>
		</MenuPopup>
	);
}

SettingsMenuPopup.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
};

export default SettingsMenuPopup;
