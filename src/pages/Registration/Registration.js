/* eslint-disable jsx-a11y/label-has-associated-control */
import './Registrtion.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
	namePattern,
	emailPattern,
	emptyNameErrorText,
	emptySurnameErrorText,
	emptyNicknameErrorText,
	emptyEmailErrorText,
	invalidNameErrorText,
	invalidSurnameErrorText,
	invalidNicknameErrorText,
	invalidEmailErrorText,
	ROUTES,
} from '../../constants';

import Button from '../../components/button/Button';

import avatarman from '../../images/avatarman.svg';
import avatarwoman from '../../images/avatarwoman.svg';

export const Registrtion = () => {
	const [userData, setUserData] = useState({
		name: '',
		surname: '',
		nickname: '',
		sex: 'female',
		email: '',
		password: '',
		termsOfUse: false,
	});

	const [nameDirty, setNameDirty] = useState(false);
	const [surnameDirty, setSurnameDirty] = useState(false);
	const [nicknameDirty, setNicknameDirty] = useState(false);
	const [emailDirty, setEmailDirty] = useState(false);
	// const [passwordDirty, setPasswordDirty] = React.useState(false);

	const [nameError, setNameError] = useState(emptyNameErrorText);
	const [surnameError, setSurnameError] = useState(emptySurnameErrorText);
	const [nicknameError, setNicknameError] = useState(emptyNicknameErrorText);
	const [emailError, setEmailError] = useState(emptyEmailErrorText);
	// const [passwordError, setPasswordError] = React.useState('Пароль не может быть пустым')

	const handleChange = (evt) => {
		const { name, value } = evt.target;

		setUserData({
			...userData,
			[name]: value,
		});

		switch (name) {
			case 'name':
				if (String(value).length === 0) {
					setNameError(emptyNameErrorText);
				} else if (!value.match(namePattern)) {
					setNameError(invalidNameErrorText);
				} else {
					setNameError('');
				}
				break;
			case 'surname':
				if (String(value).length === 0) {
					setSurnameError(emptySurnameErrorText);
				} else if (!value.match(namePattern)) {
					setSurnameError(invalidSurnameErrorText);
				} else {
					setSurnameError('');
				}
				break;
			case 'nickname':
				if (String(value).length === 0) {
					setNicknameError(emptyNicknameErrorText);
				} else if (!value.match(namePattern)) {
					setNicknameError(invalidNicknameErrorText);
				} else {
					setNicknameError('');
				}
				break;
			case 'email':
				if (String(value).length === 0) {
					setEmailError(emptyEmailErrorText);
				} else if (!value.match(emailPattern)) {
					setEmailError(invalidEmailErrorText);
				} else {
					setEmailError('');
				}
				break;
			// case 'password':
			//     if (String(value).length === 0) {
			//         setPasswordError('Пароль не может быть пустым');
			//     } else {
			//         setPasswordError('');
			//     }
			//     break;
			default:
				break;
		}
	};

	const blurHandler = (evt) => {
		switch (evt.target.name) {
			case 'name':
				setNameDirty(true);
				break;
			case 'surname':
				setSurnameDirty(true);
				break;
			case 'nickname':
				setNicknameDirty(true);
				break;
			case 'email':
				setEmailDirty(true);
				break;
			// case 'password':
			//     setPasswordDirty(true);
			//     break;
			default:
				break;
		}
	};

	return (
		<section className="registration">
			<div className="registration_container">
				<div className="registration_vector" />
				<form className="registration_form">
					<h2 className="registration_form_step-number">Шаг 1 из 2</h2>
					<h1 className="registration_form_title">Создаём аккаунт</h1>
					<div className="registration_form_input-container">
						<label htmlFor="name" className="registration_form_label">
							Имя
							<input
								type="text"
								className={`registration_form_input ${
									nameDirty && nameError && 'registration_form_input_error'
								}`}
								id="name"
								name="name"
								required
								value={userData.name}
								onChange={handleChange}
								onBlur={blurHandler}
							/>
						</label>
						{nameDirty && nameError && (
							<span className="registration_form_input_error">{nameError}</span>
						)}
					</div>
					<div className="registration_form_input-container">
						<label htmlFor="surname" className="registration_form_label">
							Фамилия
							<input
								type="text"
								className={`registration_form_input ${
									surnameDirty &&
									surnameError &&
									'registration_form_input_error'
								}`}
								id="surname"
								name="surname"
								required
								value={userData.surname}
								onChange={handleChange}
								onBlur={blurHandler}
							/>
						</label>
						{surnameDirty && surnameError && (
							<span className="registration_form_input_error">
								{surnameError}
							</span>
						)}
					</div>
					<div className="registration_form_input-container">
						<label htmlFor="nickname" className="registration_form_label">
							Твой ник
							<input
								type="text"
								className={`registration_form_input ${
									nicknameDirty &&
									nicknameError &&
									'registration_form_input_error'
								}`}
								id="nickname"
								name="nickname"
								required
								value={userData.nickname}
								onChange={handleChange}
								onBlur={blurHandler}
							/>
						</label>
						{nicknameDirty && nicknameError && (
							<span className="registration_form_input_error">
								{nicknameError}
							</span>
						)}
					</div>
					<div className="registration_form_input-container">
						<label htmlFor="email" className="registration_form_label">
							Email
							<input
								type="text"
								className={`registration_form_input ${
									emailDirty && emailError && 'registration_form_input_error'
								}`}
								id="email"
								name="email"
								required
								value={userData.email}
								onChange={handleChange}
								onBlur={blurHandler}
							/>
						</label>
						{emailDirty && emailError && (
							<span className="registration_form_input_error">
								{emailError}
							</span>
						)}
					</div>
					<fieldset className="registration_form_sex-fieldset">
						<legend className="registration_form_sex-fieldset_legend">
							Пол
						</legend>
						<div className="registration_form_sex-fieldset_radio-container">
							<input
								type="radio"
								id="female"
								name="sex"
								value="female"
								className="registration_form_sex-fieldset_radio"
								onChange={handleChange}
								defaultChecked
							/>
							<label
								htmlFor="female"
								className="registration_form_sex-fieldset_label"
							/>
							<img src={avatarwoman} alt="Avatar woman" />
						</div>
						<div className="registration_form_sex-fieldset_radio-container">
							<input
								type="radio"
								id="male"
								name="sex"
								value="male"
								className="registration_form_sex-fieldset_radio"
								onChange={handleChange}
							/>
							<label
								htmlFor="male"
								className="registration_form_sex-fieldset_label"
							/>
							<img src={avatarman} alt="Avatar man" />
						</div>
					</fieldset>
					<Button
						label="Продолжить"
						type="button"
						color="primary"
						size="large"
						className="registration_form_btn-continue"
					/>

					<span className="registration_form_span">
						У тебя уже есть аккаунт?{' '}
						<Link to={ROUTES.SIGN_IN} className="registration_form_link">
							Войти
						</Link>
					</span>
				</form>

				<div className="registration_footer">
					<div className="registration_home-indicator" />
				</div>
			</div>
		</section>
	);
};
