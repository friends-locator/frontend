import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Routes } from '../../routes';
import { AppContextProvider } from '../../context/AppContext';
import { getCurrentUser } from '../../store/thunk/getCurrentUser';
import { refreshToken } from '../../store/thunk/refreshToken';

function App() {
	const dispatch = useDispatch();
	const errorMessage = useSelector((state) => state.user.errorMessage);

	useEffect(() => {
		let token = localStorage.getItem('access_token');
		if (errorMessage) {
			const error = JSON.parse(errorMessage);
			if (error?.code === 'token_not_valid') {
				token = localStorage.getItem('refresh_token');
				dispatch(refreshToken(token));
			}
		}
		if (token) {
			dispatch(getCurrentUser(token));
		}
	}, [dispatch, errorMessage]);

	return (
		<AppContextProvider>
			<div className="page">
				<Routes />
			</div>
		</AppContextProvider>
	);
}

export default App;
