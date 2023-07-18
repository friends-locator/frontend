import { Routes as RoutesDOM, Route } from 'react-router-dom';

import {
	Registration,
	TermsOfUse,
	PrivacyPolicy,
	Login,
	Welcome,
	Friends,
	AccessGeo,
	AccessGeoError,
	Profile,
	AccessAge,
	ComingSoon,
} from '../pages';

import { ROUTES } from '../constants';
import { TrackingMap } from '../pages/TrackingMap/TrackingMap';
import { PrivateRout, PublicRoute } from '../components';

export const Routes = () => (
	<RoutesDOM>
		<Route
			path={ROUTES.ROOT}
			element={
				<PublicRoute>
					<Welcome />
				</PublicRoute>
			}
		/>
		<Route
			path={ROUTES.REGISTRATION}
			element={
				<PublicRoute>
					<Registration />
				</PublicRoute>
			}
		/>
		<Route
			path={ROUTES.LOGIN}
			element={
				<PublicRoute>
					<Login />
				</PublicRoute>
			}
		/>
		<Route path={ROUTES.PRIVACY_POLICY} element={<PrivacyPolicy />} />
		<Route path={ROUTES.TERMS_OF_USE} element={<TermsOfUse />} />
		<Route
			path={ROUTES.FRIENDS}
			element={
				<PrivateRout>
					<Friends />
				</PrivateRout>
			}
		/>
		<Route
			path={ROUTES.ACCESS_GEO}
			element={
				<PrivateRout>
					<AccessGeo />
				</PrivateRout>
			}
		/>
		<Route
			path={ROUTES.ACCESS_GEO_ERROR}
			element={
				<PrivateRout>
					<AccessGeoError />
				</PrivateRout>
			}
		/>
		<Route
			path={ROUTES.MAP}
			element={
				<PrivateRout>
					<TrackingMap />
				</PrivateRout>
			}
		/>
		<Route
			path={ROUTES.PROFILE}
			element={
				<PrivateRout>
					<Profile />
				</PrivateRout>
			}
		/>
		<Route
			path={ROUTES.ACCESS_AGE}
			element={
				<PrivateRout>
					<AccessAge />
				</PrivateRout>
			}
		/>
		<Route path={ROUTES.COMING_SOON} element={<ComingSoon />} />
		<Route path="*" element={<ComingSoon />} />
	</RoutesDOM>
);
