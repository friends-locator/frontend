import './GeneralMenuPopup.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MenuPopup from '../MenuPopup/MenuPopup';
import UserAvatar from '../UserAvatar/UserAvatar';
import Checkbox from '../Checkbox/Checkbox';
import chat from '../../images/chat_menu.svg';
import { ROUTES } from '../../constants';
import friendsNew from '../../images/friendsNew_menu.svg';
import places from '../../images/places_menu.svg';
import profile from '../../images/profile_menu.svg';
import settings from '../../images/settings_menu.svg';

function GeneralMenuPopup({
	isOpen,
	onClose,
	userStatus,
	chooseOption,
	isActiveOption,
}) {
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
			<div className="generalMenuPopup__checkbox-container">
				<Checkbox
					option="Режим невидимки"
					chooseOption={chooseOption}
					isActiveOption={isActiveOption}
				/>
			</div>
			<section className="generalMenuPopup__navigation">
				<Link to={ROUTES.CHAT} className="generalMenuPopup__link">
					<img className="generalMenuPopup__link-img" src={chat} alt="Чат" />
					<p className="generalMenuPopup__link-text">Чат</p>
				</Link>
				<Link to={ROUTES.FRIENDS} className="generalMenuPopup__link">
					<img
						className="generalMenuPopup__link-img"
						src={friendsNew}
						alt="Друзья"
					/>
					<p className="generalMenuPopup__link-text">Друзья</p>
				</Link>
				<Link to={ROUTES.COMING_SOON} className="generalMenuPopup__link">
					<img
						className="generalMenuPopup__link-img"
						src={places}
						alt="Места"
					/>
					<p className="generalMenuPopup__link-text">Места</p>
				</Link>
				<Link to={ROUTES.PROFILE} className="generalMenuPopup__link">
					<img
						className="generalMenuPopup__link-img"
						src={profile}
						alt="Профиль"
					/>
					<p className="generalMenuPopup__link-text">Профиль</p>
				</Link>
				<Link to={ROUTES.COMING_SOON} className="generalMenuPopup__link">
					<img
						className="generalMenuPopup__link-img"
						src={settings}
						alt="Настройки"
					/>
					<p className="generalMenuPopup__link-text">Настройки</p>
				</Link>
			</section>
		</MenuPopup>
	);
}

GeneralMenuPopup.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	userStatus: PropTypes.string.isRequired,
	isActiveOption: PropTypes.bool.isRequired,
	chooseOption: PropTypes.func.isRequired,
};

export default GeneralMenuPopup;
