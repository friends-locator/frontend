import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

export default function Button({
	label,
	url,
	type,
	color,
	size,
	disabled,
	onClick,
}) {
	const props = {
		disabled,
		onClick,
	};

	switch (type) {
		case 'link':
			return (
				<a
					{...props}
					href={url}
					className={`button button_link button_${size} button_color-${color}`}
				>
					{label}
				</a>
			);

		default:
			return (
				<button
					{...props}
					type={type}
					className={`button button_${size} button_color-${color}`}
				>
					{label}
				</button>
			);
	}
}

Button.propTypes = {
	label: PropTypes.string.isRequired,
	url: PropTypes.string,
	type: PropTypes.oneOf(['link', 'button', 'submit']),
	disabled: PropTypes.bool,
	color: PropTypes.oneOf(['primary', 'secondary']),
	size: PropTypes.oneOf(['medium', 'large']),
	onClick: PropTypes.func,
};

Button.defaultProps = {
	type: 'button',
	url: undefined,
	disabled: false,
	color: undefined,
	size: 'medium',
	onClick: undefined,
};
