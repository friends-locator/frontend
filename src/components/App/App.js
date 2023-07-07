import './App.scss';
import { Routes } from '../../routes';
import { AppContextProvider } from '../../context/AppContext';

function App() {
	return (
		<AppContextProvider>
			<div className="page">
				<Routes />
			</div>
		</AppContextProvider>
	);
}

export default App;
