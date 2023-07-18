import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MenuPopup from '../MenuPopup/MenuPopup';
import './SettingsMenuPopup.scss';
import Checkbox from '../Checkbox/Checkbox';
import { ROUTES } from '../../constants';

function SettingsMenuPopup({
	isOpen,
	onClose,
	chooseNightTheme,
	isActiveNightTheme,
}) {
	return (
		<MenuPopup isOpen={isOpen} onClose={onClose}>
			<div className="settingsMenuPopup__header">
				<button
					className="settingsMenuPopup__button"
					aria-label="Вернуться в главное меню"
					onClick={onClose}
				/>
				<h1 className="settingsMenuPopup__title">Настройки</h1>
			</div>
			<div className="settingsMenuPopup__checkbox-container">
				<Checkbox
					option="Тёмная тема"
					chooseOption={chooseNightTheme}
					isActiveOption={isActiveNightTheme}
				/>
			</div>
			<section className="settingsMenuPopup__navigation">
				<div className="settingsMenuPopup__link-container">
					<Link className="settingsMenuPopup__link" to={ROUTES.COMING_SOON}>
						Видимость на карте
					</Link>
					<Link className="settingsMenuPopup__link" to={ROUTES.COMING_SOON}>
						Сменить пароль
					</Link>
				</div>
				<div className="settingsMenuPopup__link-container">
					<Link className="settingsMenuPopup__link" to={ROUTES.TERMS_OF_USE}>
						Условия использования
					</Link>
					<Link className="settingsMenuPopup__link" to={ROUTES.PRIVACY_POLICY}>
						Политика конфиденциальности
					</Link>
					<Link className="settingsMenuPopup__link" to={ROUTES.COMING_SOON}>
						Удалить аккаунт
					</Link>
				</div>
			</section>
		</MenuPopup>
	);
}

SettingsMenuPopup.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	isActiveNightTheme: PropTypes.bool.isRequired,
	chooseNightTheme: PropTypes.func.isRequired,
};

export default SettingsMenuPopup;
