import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './PopupDeleteAccount.scss';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import Button from '../Button/Button';
import { ROUTES } from '../../constants';
import success from '../../images/icon-success.svg';

function PopupDeleteAccount({ isOpen, onClose, deleteAccount }) {
	const [title, setTitle] = useState(
		'Вы действительно хотите удалить свой профиль в «Где друзья»?'
	);

	const handleDeleteClick = () => {
		setTitle('Для подтверждения действия введите свой пароль');
	};

	const handleConfirmClick = () => {
		deleteAccount();
		setTitle('');
	};

	return (
		<PopupWithForm
			title={title}
			name="delete-account"
			isOpen={isOpen}
			onClose={onClose}
		>
			{title === '' && (
				<div className="delete-account__container">
					<img
						className="delete-account__img"
						src={success}
						alt="Профиль удалён"
					/>
					<p className="delete-account__text">Профиль удалён</p>
				</div>
			)}

			{title ===
				'Вы действительно хотите удалить свой профиль в «Где друзья»?' && (
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
						onClick={handleDeleteClick}
					/>
				</div>
			)}

			{title === 'Для подтверждения действия введите свой пароль' && (
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
						label="Подтвердить"
						type="button"
						color="primary"
						size="medium"
						onClick={handleConfirmClick}
					/>
				</div>
			)}

			{title === '' && (
				<Link to={ROUTES.ROOT}>
					<Button
						label="На главную"
						type="button"
						color="primary"
						size="medium"
					/>
				</Link>
			)}
		</PopupWithForm>
	);
}

PopupDeleteAccount.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	deleteAccount: PropTypes.func.isRequired,
};

export default PopupDeleteAccount;
