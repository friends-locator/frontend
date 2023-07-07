import React from 'react';
import PropTypes from 'prop-types';
import './PopupWithForm.scss';

function PopupWithForm({
	title,
	name,
	children,
	isOpen,
	onClose,
	onSubmit,
	formWidth,
}) {
	function handleMouseDown(evt) {
		if (evt.target === evt.currentTarget) {
			onClose();
		}
	}

	return (
		/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */
		<div
			className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}
			onMouseDown={handleMouseDown}
		>
			<div className="popup__container" style={{ width: `${formWidth}` }}>
				{title && <h2 className="popup__title">{title}</h2>}
				<form className="form" name={name} onSubmit={onSubmit} noValidate>
					{children}
				</form>
				<button
					className="popup__btn-close"
					type="button"
					aria-label="Закрыть"
					onClick={onClose}
				/>
			</div>
		</div>
	);
}
PopupWithForm.propTypes = {
	title: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	children: PropTypes.element.isRequired,
	isOpen: PropTypes.bool,
	onClose: PropTypes.func,
	onSubmit: PropTypes.func,
	formWidth: PropTypes.string,
};

PopupWithForm.defaultProps = {
	isOpen: false,
	onClose: undefined,
	onSubmit: undefined,
	formWidth: '320px',
};

export default PopupWithForm;
