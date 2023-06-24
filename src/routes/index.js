import { Routes as RoutesDOM, Route } from 'react-router-dom';
import { Registrtion } from '../pages';
import { ROUTES } from '../constants';

export const Routes = () => (
	<RoutesDOM>
		<Route path={ROUTES.REGISTRATION} element={<Registrtion />} />
	</RoutesDOM>
);
