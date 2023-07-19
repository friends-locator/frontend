import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLocation, setLocationError } from '../../store/slices/location';
import { Button } from '../../components';
import { ROUTES } from '../../constants';
import geoTag from '../../images/geo-tag.png';
import './AccessGeo.scss';

export const AccessGeo = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLocateBtnClick = () => {
		const handleSuccess = (position) => {
			dispatch(
				setLocation({
					latitude: position.coords.latitude,
					longitude: position.coords.longitude,
				})
			);
			navigate(ROUTES.MAP);
			// @TODO отправить координаты на сервер
			// Чтобы их получить используем:
			// const coords =
			// 				{
			// 					latitude: useSelector(state => state.location.latitude),
			// 					longitude: useSelector(state => state.location.longitude),
			// 				}
		};

		const handleError = (error) => {
			dispatch(
				setLocationError({
					errorMessage: error.message,
				})
			);
		};

		navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
	};

	return (
		<section className="access-geo">
			<div className="access-geo_container">
				<div className="access-geo_spiral" />
				<img
					src={geoTag}
					alt="geo-tag icon"
					className="access-geo_geo-tag-img"
				/>
				<h1 className="access-geo_title">
					%UserName%, где ты сейчас находишься?
				</h1>
				<h2 className="access-geo_subtitle">
					Чтобы показывать друзьям где ты находишься, предоставь приложению
					доступ к твоему местоположению
				</h2>
				<Button
					label="Определить местоположение"
					type="button"
					size="large"
					color="primary"
					className="access-geo_locate-btn"
					onClick={handleLocateBtnClick}
				/>
				<Link to={ROUTES.ACCESS_GEO_ERROR}>
					<Button
						label="Отменить"
						type="button"
						size="large"
						color="secondary"
						className="access-geo_cancel-btn"
					/>
				</Link>
			</div>
		</section>
	);
};
