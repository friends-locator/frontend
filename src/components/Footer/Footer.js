import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ROUTES } from '../../constants';
import './Footer.scss';

const Footer = ({ className, activeTab }) => {
	const [activeButton, setActiveButton] = useState(activeTab);

	const handleClick = (buttonName) => {
		setActiveButton(buttonName);
	};

	return (
		<footer className={`footer ${className}`}>
			<div className="footer_container">
				<Link
					to={ROUTES.MAP}
					className={`footer__link ${activeButton === 'map' ? 'active' : ''}`}
					onClick={() => handleClick('map')}
				>
					<span className="footer__link-icon">
						<svg
							width="24"
							height="24"
							viewBox="0 0 25 24"
							fill="#AEAFA4"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M12.833 7C10.6239 7 8.83301 8.79086 8.83301 11C8.83301 13.2091 10.6239 15 12.833 15C15.0421 15 16.833 13.2091 16.833 11C16.833 8.79086 15.0421 7 12.833 7ZM10.833 11C10.833 9.89543 11.7284 9 12.833 9C13.9376 9 14.833 9.89543 14.833 11C14.833 12.1046 13.9376 13 12.833 13C11.7284 13 10.833 12.1046 10.833 11Z"
							/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M12.833 2C7.86244 2 3.83301 6.02944 3.83301 11C3.83301 14.3868 5.79669 17.2529 7.7509 19.2071C8.74056 20.1968 9.76475 20.9907 10.6179 21.5427C11.0437 21.8182 11.4393 22.0415 11.7772 22.2002C11.9457 22.2792 12.1124 22.3482 12.27 22.3993C12.4102 22.4447 12.6139 22.5 12.833 22.5C13.0521 22.5 13.2559 22.4447 13.396 22.3993C13.5536 22.3482 13.7204 22.2792 13.8888 22.2002C14.2267 22.0415 14.6223 21.8182 15.0481 21.5427C15.9013 20.9907 16.9255 20.1968 17.9151 19.2071C19.8693 17.2529 21.833 14.3868 21.833 11C21.833 6.02944 17.8036 2 12.833 2ZM5.83301 11C5.83301 7.13401 8.96701 4 12.833 4C16.699 4 19.833 7.13401 19.833 11C19.833 13.6132 18.2967 15.9971 16.5009 17.7929C15.6156 18.6782 14.7022 19.3843 13.9616 19.8636C13.5906 20.1036 13.2752 20.2788 13.039 20.3897C12.9537 20.4297 12.8851 20.4583 12.833 20.4778C12.7809 20.4583 12.7124 20.4297 12.6271 20.3897C12.3908 20.2788 12.0754 20.1036 11.7044 19.8636C10.9638 19.3843 10.0505 18.6782 9.16511 17.7929C7.36932 15.9971 5.83301 13.6132 5.83301 11ZM12.7397 20.5081L12.7442 20.5071C12.7412 20.5078 12.7397 20.5081 12.7397 20.5081ZM12.9263 20.5081L12.9218 20.5071L12.924 20.5076L12.9263 20.5081Z"
							/>
						</svg>
					</span>
					<span className="footer__link-text">Карта</span>
				</Link>
				<Link
					to={ROUTES.COMING_SOON}
					className={`footer__link ${activeButton === 'chat' ? 'active' : ''}`}
					onClick={() => handleClick('chat')}
				>
					<span className="footer__link-icon">
						<svg
							width="24"
							height="24"
							viewBox="0 0 25 24"
							fill="#AEAFA4"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M20.5 3C21.0523 3 21.5 3.44772 21.5 4V18C21.5 18.5523 21.0523 19 20.5 19H12.8333L9.1 21.8C8.44076 22.2944 7.5 21.824 7.5 21V19H4.5C3.94772 19 3.5 18.5523 3.5 18V4C3.5 3.44772 3.94772 3 4.5 3H20.5ZM19.5 5H5.5V17H8.5C9.05228 17 9.5 17.4477 9.5 18V19L11.9 17.2C12.0731 17.0702 12.2836 17 12.5 17H19.5V5ZM15.5 12V14H7.5V12H15.5ZM17.5 8V10H7.5V8H17.5Z" />
						</svg>
					</span>
					<span className="footer__link-text">Чат</span>
				</Link>
				<Link
					to={ROUTES.FRIENDS}
					className={`footer__link ${
						activeButton === 'friends' ? 'active' : ''
					}`}
					onClick={() => handleClick('friends')}
				>
					<span className="footer__link-icon">
						<svg
							width="24"
							height="24"
							viewBox="0 0 25 24"
							fill="#AEAFA4"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M16.666 3C14.1807 3 12.166 5.01472 12.166 7.5C12.166 9.98528 14.1807 12 16.666 12C19.1513 12 21.166 9.98528 21.166 7.5C21.166 5.01472 19.1513 3 16.666 3ZM14.166 7.5C14.166 6.11929 15.2853 5 16.666 5C18.0467 5 19.166 6.11929 19.166 7.5C19.166 8.88071 18.0467 10 16.666 10C15.2853 10 14.166 8.88071 14.166 7.5Z"
							/>
							<path d="M16.6661 13C12.256 13 9.66602 16.5344 9.66602 20H11.666C11.666 17.4656 13.5262 15 16.6661 15C19.8059 15 21.666 17.4656 21.666 20H23.666C23.666 16.5344 21.0762 13 16.6661 13Z" />
							<path d="M0.666016 21C0.666016 17.6209 2.99488 14 7.16609 14C8.16296 14 9.07517 14.2134 9.88196 14.5968L9.0235 16.4032C8.49012 16.1497 7.87176 16 7.16609 16C4.4165 16 2.66602 18.3791 2.66602 21H0.666016Z" />
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M7.16602 5C4.95688 5 3.16602 6.79086 3.16602 9C3.16602 11.2091 4.95688 13 7.16602 13C9.37515 13 11.166 11.2091 11.166 9C11.166 6.79086 9.37515 5 7.16602 5ZM5.16602 9C5.16602 7.89543 6.06145 7 7.16602 7C8.27059 7 9.16602 7.89543 9.16602 9C9.16602 10.1046 8.27059 11 7.16602 11C6.06145 11 5.16602 10.1046 5.16602 9Z"
							/>
						</svg>
					</span>
					<span className="footer__link-text">Друзья</span>
				</Link>
			</div>
		</footer>
	);
};

Footer.propTypes = {
	className: PropTypes.string,
	activeTab: PropTypes.oneOf(['map', 'chat', 'friends']).isRequired,
};

Footer.defaultProps = {
	className: '',
};

export default Footer;
