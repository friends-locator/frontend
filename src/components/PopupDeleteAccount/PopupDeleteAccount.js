import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './PopupDeleteAccount.scss';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import Button from '../Button/Button';
import { ROUTES } from '../../constants';

function PopupDeleteAccount({ isOpen, onClose, deleteAccount }) {
	const [step, setStep] = useState(1);
	const handleClick = () => {
		deleteAccount();
		setStep(2);
	};

	return (
		<PopupWithForm
			title={
				step === 1
					? 'Вы действительно хотите удалить свой профиль в «Где друзья»?'
					: step === 2 && 'Профиль удалён'
			}
			name="delete-account"
			isOpen={isOpen}
			onClose={onClose}
		>
			<div className="delete-account__btn-container">
				{step === 1 && (
					<>
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
							onClick={handleClick}
						/>
					</>
				)}
				{step === 2 && (
					<Link to={ROUTES.ROOT}>
						<Button
							label="На главную"
							type="button"
							color="primary"
							size="medium"
						/>
					</Link>
				)}
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
