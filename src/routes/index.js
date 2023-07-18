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
import { PrivateRoute, PublicRoute } from '../components';

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
				<PrivateRoute>
					<Friends />
				</PrivateRoute>
			}
		/>
		<Route
			path={ROUTES.ACCESS_GEO}
			element={
				<PrivateRoute>
					<AccessGeo />
				</PrivateRoute>
			}
		/>
		<Route
			path={ROUTES.ACCESS_GEO_ERROR}
			element={
				<PrivateRoute>
					<AccessGeoError />
				</PrivateRoute>
			}
		/>
		<Route
			path={ROUTES.MAP}
			element={
				<PrivateRoute>
					<TrackingMap />
				</PrivateRoute>
			}
		/>
		<Route
			path={ROUTES.PROFILE}
			element={
				<PrivateRoute>
					<Profile />
				</PrivateRoute>
			}
		/>
		<Route
			path={ROUTES.ACCESS_AGE}
			element={
				<PublicRoute>
					<AccessAge />
				</PublicRoute>
			}
		/>
		<Route path={ROUTES.COMING_SOON} element={<ComingSoon />} />
		<Route path="*" element={<ComingSoon />} />
	</RoutesDOM>
);
