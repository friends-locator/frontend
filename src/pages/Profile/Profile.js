import React, { useState } from 'react';
import { Button, Header, Footer, PopupWithForm, Input } from '../../components';
import spiralPng from '../../images/spiral-banner.png';
import vectorCircle from '../../images/vector-signin-2.svg';
import avatarMale from '../../images/icon_profile_man.png';
import avatarFemale from '../../images/icon_profile_woman.png';
import './Profile.scss';

const UserInfo = {
	firstName: 'Екатерина',
	lastName: 'Иванова',
	nickname: 'Ivanova123',
	status: '',
	sex: 'female',
};

// TODO адаптировать количество рекомендуемых статусов под экран
const recommendedStatuses = [
	'На работе',
	'На мероприятии',
	'Не беспокоить',
].slice(0, 3);

export const Profile = () => {
	const [nicknamePopupOpened, setNicknamePopupOpened] = useState(false);
	const [inviteFreindsPopupOpened, setInviteFreindsPopupOpened] =
		useState(false);
	const [formValues, setFormValues] = useState({
		nicknameValue: UserInfo.nickname,
		inviteEmailValue: '',
	});
	const handleStatusChange = () => {
		// Обработчик для изменения статуса
	};

	function getUserAvatar(sex) {
		return sex === 'male' ? avatarMale : avatarFemale;
	}

	return (
		<section className="profile">
			<Header />
			<h1 className="profile-heading">Профиль</h1>
			<div className="profile-user-container">
				<button
					className="profile-avatar"
					onClick={(f) => f}
					type="button"
					aria-label="Изменить аватар"
				>
					<img
						src={getUserAvatar(UserInfo.sex)}
						alt="Avatar"
						className="profile-avatar-image"
					/>
				</button>
				{/* <Avatar url={getUserAvatar(UserInfo.sex)} /> */}
				<div className="profile-user-info">
					<div className="profile-user-name">{`${UserInfo.firstName} ${UserInfo.lastName}`}</div>
					<div className="profile-user-nickname">{UserInfo.nickname}</div>
					<button
						className="profile-user-change-nickname"
						aria-label="Изменить ник"
						onClick={() => setNicknamePopupOpened(true)}
					>
						Изменить ник
					</button>
				</div>
			</div>
			<form className="profile-status-container">
				<label htmlFor="status" className="profile-status-label">
					Твой статус
					<input
						type="text"
						placeholder="Хочу на прогулку"
						className="profile-status-input"
						id="status"
						onChange={handleStatusChange}
						onBlur={handleStatusChange}
					/>
				</label>
				<div className="profile-status-bar">
					{recommendedStatuses.map((status) => (
						<button
							key={status}
							type="button"
							className="profile-status-bar-button"
						>
							{status}
						</button>
					))}
				</div>
			</form>
			<div className="profile-invite-banner">
				<div className="profile-invite-banner-text-container">
					<h2 className="profile-invite-banner-heading">
						Пригласи новых друзей
					</h2>
					<p className="profile-invite-banner-text">
						Добавить новых друзей с помощью электронной почты
					</p>
				</div>
				<Button
					label="Добавить"
					type="button"
					color="secondary"
					size="medium"
					onClick={() => setInviteFreindsPopupOpened(true)}
					className="profile-invite-banner-add-btn"
					onSubmit={() => {}}
				/>
				<img
					className="profile-invite-banner-circle"
					src={vectorCircle}
					alt="векторный круг"
				/>
				<div className="profile-invite-banner-fixed-spiral">
					<img
						className="profile-invite-banner-spiral"
						src={spiralPng}
						alt="спираль"
					/>
				</div>
			</div>

			<Footer />
			<PopupWithForm
				title=""
				name="change-nickname"
				isOpen={nicknamePopupOpened}
				onClose={() => setNicknamePopupOpened(false)}
				onSubmit={() => {}}
			>
				<>
					<Input
						id="change-nickname"
						name="change-nickname"
						label="Напиши твой ник"
						placeholder="Имя пользователя"
						className=""
						inputValue={formValues.nicknameValue}
						onChange={(e) => {
							setFormValues((prevState) => ({
								...prevState,
								nicknameValue: e.target.value,
							}));
						}}
						onBlur={() => {}}
					/>
					<div className="popup-button-container">
						<Button
							label="Отмена"
							type="button"
							color="secondary"
							size="medium"
							onClick={() => {
								setFormValues((prevState) => ({
									...prevState,
									nicknameValue: UserInfo.nickname,
								}));
								setNicknamePopupOpened(false);
							}}
							className="popup-button"
						/>
						{/* TODO отправка - ожидание ответа - вызов попапа с результатом */}
						<Button
							label="Готово"
							type="submit"
							color="primary"
							size="medium"
							onClick={(e) => {
								e.preventDefault();
								console.log(
									`Новый никнейм "${formValues.nicknameValue}" отправлен на сервер`
								);
								setNicknamePopupOpened(false);
							}}
							className="popup-button"
						/>
					</div>
				</>
			</PopupWithForm>

			<PopupWithForm
				title="Введи адрес электронной почты. Мы отправим другу письмо с приглашением"
				name="change-nickname"
				isOpen={inviteFreindsPopupOpened}
				onClose={() => setInviteFreindsPopupOpened(false)}
				onSubmit={() => {}}
			>
				<>
					<Input
						id="change-nickname"
						name="change-nickname"
						label="Email"
						placeholder="Электронная почта"
						className=""
						inputValue={formValues.inviteEmailValue}
						onChange={(e) => {
							setFormValues((prevState) => ({
								...prevState,
								inviteEmailValue: e.target.value,
							}));
						}}
						onBlur={() => {}}
					/>
					<div className="popup-button-container">
						<Button
							label="Отмена"
							type="button"
							color="secondary"
							size="medium"
							onClick={() => {
								setFormValues((prevState) => ({
									...prevState,
									inviteEmailValue: '',
								}));
								setInviteFreindsPopupOpened(false);
							}}
							className="popup-button"
						/>
						{/* TODO отправка - ожидание ответа - вызов попапа с результатом */}
						<Button
							label="Подтвердить"
							type="submit"
							color="primary"
							size="medium"
							onClick={(e) => {
								e.preventDefault();
								console.log(
									`Приглошение отправленно на почту "${formValues.inviteEmailValue}"`
								);
								setInviteFreindsPopupOpened(false);
								setFormValues((prevState) => ({
									...prevState,
									inviteEmailValue: '',
								}));
							}}
							className="popup-button"
						/>
					</div>
				</>
			</PopupWithForm>
		</section>
	);
};
