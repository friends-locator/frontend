import { Link } from 'react-router-dom';
import { Button } from '../../components';
import { ROUTES } from '../../constants';
import geoTag from '../../images/geo-tag-error.png';
import './AccessGeoError.scss';

export const AccessGeoError = () => (
	// const handleLocateBtnClick = () => {
	//     const geo = navigator.geolocation;

	//     if (!geo) {
	//         dispatch(error());
	//     } else {
	//         dispatch(geo({...geo.getCurrentPosition()}));
	//     }
	// }

	<section className="access-geo-error">
		<div className="access-geo-error_container">
			<img
				src={geoTag}
				alt="geo-tag icon"
				className="access-geo-error_geo-tag-img"
			/>
			<h1 className="access-geo-error_title">Хьюстон, мы тебя не видим</h1>
			<h2 className="access-geo-error_subtitle">
				Необходимо предоставить разрешение браузеру для определения геопозиции
			</h2>
			<h3 className="access-geo-error_info">
				Более подробно с информацией можно ознакомиться в разделе{' '}
				<Link
					to={ROUTES.TERMS_OF_USE}
					className="access-geo-error_terms-of-use-link"
					target="_blank"
				>
					условия использования
				</Link>
			</h3>
			<Button
				label="Определить местоположение"
				type="button"
				size="large"
				color="primary"
				className="access-geo-error_locate-btn"
				// onClick={handleLocateBtnClick}
			/>
			<Link to={ROUTES.ROOT}>
				<Button
					label="Выйти"
					type="button"
					size="large"
					color="secondary"
					className="access-geo-error_exit-btn"
				/>
			</Link>
		</div>
	</section>
);
