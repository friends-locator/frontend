import PropTypes from 'prop-types';
import './PopupDeleteAccount.scss';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import Button from '../Button/Button';

function PopupDeleteAccount({ isOpen, onClose, deleteAccount }) {
	return (
		<PopupWithForm
			title="Вы действительно хотите удалить свой профиль в «Где друзья»?"
			name="delete-account"
			isOpen={isOpen}
			onClose={onClose}
		>
			<div className="delete-account__btn-container">
				<Button
					className="delete-account__btn"
					label="Отмена"
					type="button"
					color="secondary"
					size="medium"
					onClick={onClose}
				/>
				<Button
					className="delete-account__btn"
					label="Удалить"
					type="button"
					color="primary"
					size="medium"
					onClick={deleteAccount}
				/>
			</div>
		</PopupWithForm>
	);
}

PopupDeleteAccount.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	deleteAccount: PropTypes.func.isRequired,
};

export default PopupDeleteAccount;
