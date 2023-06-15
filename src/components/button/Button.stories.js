import { Button } from './Button';

export default {
	title: 'UI/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	args: {
		label: 'Button',
		type: 'button',
	},
};

export const Default = (args) => <Button {...args}>Привет мир!</Button>;

export const Color = (args) => (
	<div className="buttons">
		<Button color="white" {...args} />
		<Button color="light" {...args} />
		<Button color="dark" {...args} />
		<Button color="black" {...args} />
		<Button color="text" {...args} />
		<Button color="ghost" {...args} />
		<Button color="primary" {...args} />
		<Button color="link" {...args} />
		<Button color="info" {...args} />
		<Button color="success" {...args} />
		<Button color="warning" {...args} />
		<Button color="danger" {...args} />
	</div>
);

export const Sizes = (args) => (
	<div className="buttons">
		<Button size="small" {...args} />
		<Button size="normal" {...args} />
		<Button size="medium" {...args} />
		<Button size="large" {...args} />
	</div>
);
