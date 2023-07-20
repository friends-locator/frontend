import PropTypes from 'prop-types';
import './PopupDeleteAccount.scss';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function PopupDeleteAccount({ isOpen, onClose }) {
	return (
		<PopupWithForm
			title="Вы действительно хотите удалить свой профиль в «Где друзья»?"
			name="delete-account"
			isOpen={isOpen}
			onClose={onClose}
		>
			<div className="delete-account__container">123</div>
		</PopupWithForm>
	);
}

PopupDeleteAccount.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
};

export default PopupDeleteAccount;
