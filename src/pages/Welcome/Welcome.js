import React from 'react';
import './Welcome.scss';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Carousel from '../../components/Carousel/Carousel';
import { ROUTES } from '../../constants';

export function Welcome() {
	return (
		<main className="welcome">
			<Carousel />
			<div className="welcome__button-container">
				<Link to={ROUTES.REGISTRATION}>
					<Button
						label="Зарегистрироваться"
						type="button"
						size="large"
						color="primary"
					/>
				</Link>
				<Link to={ROUTES.SIGN_IN}>
					<Button label="Войти" type="button" size="large" color="secondary" />
				</Link>
			</div>
		</main>
	);
}
