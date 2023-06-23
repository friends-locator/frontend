import { Routes as RoutesDOM, Route } from 'react-router-dom';
import { Registrtion, TermsOfUse, PrivacyPolicy } from '../pages';
import { ROUTES } from '../constants';

export const Routes = () => (
	<RoutesDOM>
		<Route path={ROUTES.REGISTRATION} element={<Registrtion />} />
		<Route path={ROUTES.PRIVACY_POLICY} element={<PrivacyPolicy />} />
		<Route path={ROUTES.TERMS_OF_USE} element={<TermsOfUse />} />
	</RoutesDOM>
);
