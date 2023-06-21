import React from 'react';
import PropTypes from 'prop-types';

function PopupWithForm({ title, name, children, isOpen, onClose, onSubmit }) {
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
			<div className="popup__container">
				<h2 className="popup__title">{title}</h2>
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
};

PopupWithForm.defaultProps = {
	isOpen: false,
	onClose: undefined,
	onSubmit: undefined,
};

export default PopupWithForm;
