import { Routes as RoutesDOM, Route } from 'react-router-dom';

import {
	Registration,
	TermsOfUse,
	PrivacyPolicy,
	Signin,
	Welcome,
	Friends,
	AccessGeo,
	AccessGeoError,
	Profile,
	AccessAge,
} from '../pages';

import { ROUTES } from '../constants';
import { TrackingMap } from '../pages/TrackingMap/TrackingMap';

export const Routes = () => (
	<RoutesDOM>
		<Route path={ROUTES.ROOT} element={<Welcome />} />
		<Route path={ROUTES.REGISTRATION} element={<Registration />} />
		<Route path={ROUTES.SIGN_IN} element={<Signin />} />
		<Route path={ROUTES.PRIVACY_POLICY} element={<PrivacyPolicy />} />
		<Route path={ROUTES.TERMS_OF_USE} element={<TermsOfUse />} />
		<Route path={ROUTES.FRIENDS} element={<Friends />} />
		<Route path={ROUTES.ACCESS_GEO} element={<AccessGeo />} />
		<Route path={ROUTES.ACCESS_GEO_ERROR} element={<AccessGeoError />} />
		<Route path={ROUTES.MAP} element={<TrackingMap />} />
		<Route path={ROUTES.PROFILE} element={<Profile />} />
		<Route path={ROUTES.ACCESS_AGE} element={<AccessAge />} />
	</RoutesDOM>
);
