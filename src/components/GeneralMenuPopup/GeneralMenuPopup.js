import './GeneralMenuPopup.scss';
import PropTypes from 'prop-types';
import MenuPopup from '../MenuPopup/MenuPopup';
import UserAvatar from '../UserAvatar/UserAvatar';

function GeneralMenuPopup({ isOpen, onClose, userStatus }) {
	return (
		<MenuPopup isOpen={isOpen} onClose={onClose}>
			<div className="generalMenuPopup__header">
				<UserAvatar />
				{userStatus === '' ? (
					<div className="generalMenuPopup__status">Статус не выбран</div>
				) : (
					<div className="generalMenuPopup__status">{userStatus}</div>
				)}
			</div>
		</MenuPopup>
	);
}

GeneralMenuPopup.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	userStatus: PropTypes.string.isRequired,
};

export default GeneralMenuPopup;
