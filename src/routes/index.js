import { Routes as RoutesDOM, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

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
	ComingSoon,
} from '../pages';

import { ROUTES } from '../constants';
import { TrackingMap } from '../pages/TrackingMap/TrackingMap';
import { PrivateRout } from '../components';

export const Routes = () => (
	<RoutesDOM>
		<Route path={ROUTES.ROOT} element={<Welcome />} />
		<Route path={ROUTES.REGISTRATION} element={<Registration />} />
		<Route path={ROUTES.SIGN_IN} element={<Signin />} />
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

PrivateRout.propTypes = {
	children: PropTypes.node.isRequired,
};
