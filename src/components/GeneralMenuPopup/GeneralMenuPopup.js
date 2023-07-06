import './GeneralMenuPopup.scss';
import PropTypes from 'prop-types';
import MenuPopup from '../MenuPopup/MenuPopup';

function GeneralMenuPopup({ isOpen, onClose }) {
	return (
		<MenuPopup isOpen={isOpen} onClose={onClose}>
			<div className="generalMenuPopup__header" />
		</MenuPopup>
	);
}

GeneralMenuPopup.propTypes = {
	isOpen: PropTypes.bool,
	onClose: PropTypes.func,
};
//
GeneralMenuPopup.defaultProps = {
	isOpen: false,
	onClose: undefined,
};

export default GeneralMenuPopup;
