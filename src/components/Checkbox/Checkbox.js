import './Checkbox.scss';
import PropTypes from 'prop-types';

function Checkbox({ option, chooseOption, isActiveOption }) {
	return (
		<label className="checkbox" htmlFor="checkbox">
			<input
				id="checkbox"
				className="checkbox__input"
				type="checkbox"
				onChange={chooseOption}
				checked={isActiveOption}
			/>
			<span className="checkbox__toggle" />
			<span className="checkbox__title">{option}</span>
		</label>
	);
}

Checkbox.propTypes = {
	option: PropTypes.string.isRequired,
	chooseOption: PropTypes.func.isRequired,
	isActiveOption: PropTypes.bool.isRequired,
};

export default Checkbox;
