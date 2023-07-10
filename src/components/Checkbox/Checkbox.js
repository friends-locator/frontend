import './Checkbox.scss';
import PropTypes from 'prop-types';

function Checkbox({ chooseOption, isActiveOption }) {
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
			<span className="checkbox__title">Короткометражки</span>
		</label>
	);
}

Checkbox.propTypes = {
	chooseOption: PropTypes.func,
	isActiveOption: PropTypes.bool,
};

Checkbox.defaultProps = {
	chooseOption: undefined,
	isActiveOption: false,
};
export default Checkbox;
