import React from 'react';
import './Button.css';

export function Button({ label, url, type, color, size, disabled, onClick }) {
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
