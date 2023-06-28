import './App.scss';
import { Routes } from '../../routes';
import TrackingMap from "../TrackingMap/TrackingMap";

function App() {
	return (
		<div className="page">
			<Routes />
			<TrackingMap />
		</div>
	);
}

export default App;
