import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './PopupDeleteAccount.scss';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import Button from '../Button/Button';
import { ROUTES } from '../../constants';
import success from '../../images/icon-success.svg';
import InputPassword from '../InputPassword/InputPassword';

function PopupDeleteAccount({ isOpen, onClose, deleteAccount }) {
	const [title, setTitle] = useState(
		'Вы действительно хотите удалить свой профиль в «Где друзья»?'
	);
	const [password, setPassword] = useState('');
	const [passwordType, setPasswordType] = useState('password');

	const handleChange = (evt) => {
		setPassword(evt.target.value);
	};

	const handleDeleteClick = () => {
		setTitle('Для подтверждения действия введите свой пароль');
	};

	const handleConfirmClick = () => {
		deleteAccount(password);
		setTitle('');
	};

	const handlePasswordBtnClick = () => {
		if (passwordType === 'password') {
			setPasswordType('text');
		} else {
			setPasswordType('password');
		}
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
			{/* TODO passwordDirty и passwordError использовать или убрать из обязательных у InputPassword */}
			{/* TODO обработку, если пользователь ввел неверный пароль */}
			{title === 'Для подтверждения действия введите свой пароль' && (
				<>
					<InputPassword
						label="Пароль"
						passwordType={passwordType}
						id="password"
						name="password"
						isRequired
						inputValue={password || ''}
						onChange={handleChange}
						onPasswordBtnClick={handlePasswordBtnClick}
					/>
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
				</>
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
