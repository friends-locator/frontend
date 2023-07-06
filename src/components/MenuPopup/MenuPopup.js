import './MenuPopup.scss';
import PropTypes from 'prop-types';

function MenuPopup({ isOpen, onClose }) {
  function handleOverlayClick(evt) {
    if (evt.target===evt.currentTarget) onClose()
  }

  return (
    <div className={`menuPopup ${isOpen && "menuPopup_opened"}`} onClick={handleOverlayClick}>
      <div className="menuPopup__container"/>
    </div>
  )
}

MenuPopup.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

MenuPopup.defaultProps = {
  isOpen: false,
  onClose: undefined,
};

export default MenuPopup;
