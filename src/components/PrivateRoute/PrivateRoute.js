import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { ROUTES } from '../../constants';

const PrivateRoute = ({ children }) => {
	const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
	return isAuthenticated ? children : <Navigate to={ROUTES.LOGIN} replace />;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
	children: PropTypes.node.isRequired,
};
