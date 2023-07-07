import PropTypes from 'prop-types';
import { useState } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import InputText from '../InputText/InputText';
import Button from '../Button/Button';
import {
	emailPattern,
	emptyEmailErrorText,
	invalidEmailErrorText,
} from '../../constants';

function PopupAddFriend({ isOpen, onClose }) {
	// const [name, setName] = useState('');

	const [emailError, setEmailError] = useState(emptyEmailErrorText);

	const handleChange = (evt) => {
		const { value } = evt.target;

		if (String(value).length === 0) {
			setEmailError(emptyEmailErrorText);
		} else if (!value.match(emailPattern)) {
			setEmailError(invalidEmailErrorText);
		} else {
			setEmailError('');
		}
	};

	return (
		<PopupWithForm
			title="Введи адрес электронной почты, с которой твой друг зарегистрирован в «Где друзья?»"
			name="add-friend"
			isOpen={isOpen}
			onClose={onClose}
		>
			<InputText
				label="Email"
				id="email"
				name="email"
				isRequired
				onChange={handleChange}
				inputError={emailError}
			/>
			<Button />
			<Button />
		</PopupWithForm>
	);
}

PopupAddFriend.propTypes = {
	isOpen: PropTypes.bool,
	onClose: PropTypes.func,
};

PopupAddFriend.defaultProps = {
	isOpen: false,
	onClose: undefined,
};

export default PopupAddFriend;
