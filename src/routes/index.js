import { Routes as RoutesDOM, Route } from 'react-router-dom';
import { Registration, TermsOfUse, PrivacyPolicy, Friends } from '../pages';
import { ROUTES } from '../constants';

export const Routes = () => (
	<RoutesDOM>
		<Route path={ROUTES.REGISTRATION} element={<Registration />} />
		<Route path={ROUTES.PRIVACY_POLICY} element={<PrivacyPolicy />} />
		<Route path={ROUTES.TERMS_OF_USE} element={<TermsOfUse />} />
		<Route path={ROUTES.FRIENDS} element={<Friends />} />
	</RoutesDOM>
);
