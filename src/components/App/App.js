import './App.scss';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Routes } from '../../routes';
import { AppContextProvider } from '../../context/AppContext';
import { loginSuccess } from '../../store/slices/user';
import { userData } from '../../constants';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loginSuccess(userData));
		// eslint-disable-next-line  react-hooks/exhaustive-deps
	}, []);

	return (
		<AppContextProvider>
			<div className="page">
				<Routes />
			</div>
		</AppContextProvider>
	);
}

export default App;
