import { Button } from './Button';

export default {
	title: 'UI/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		size: {
			description: 'Варианты размера кнопки',
			options: ['small', 'medium', 'large'],
			control: {
				type: 'radio',
			},
		},
		type: {
			description: 'Варианты типа кнопки',
			options: ['button', 'submit', 'link'],
			control: {
				type: 'radio',
			},
		},
		color: {
			description: 'Варианты цвета кнопки',
			options: ['primary', 'secondary'],
			control: {
				type: 'radio',
			},
		},
	},
	args: {
		label: 'Button',
		type: 'button',
		size: 'medium',
		color: 'primary',
		disabled: false,
	},
};

export const Default = (args) => <Button {...args} />;
