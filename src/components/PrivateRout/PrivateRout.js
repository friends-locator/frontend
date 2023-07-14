import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRout = ({ children }) => {
	const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
	const location = useLocation();

	return isAuthenticated ? (
		children
	) : (
		<Navigate to="/signin" state={{ from: location }} replace />
	);
};

export default PrivateRout;

PrivateRout.propTypes = {
	children: PropTypes.node.isRequired,
};
