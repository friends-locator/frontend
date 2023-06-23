import './App.scss';
import Welcome from "../Welcome/Welcome";

function App() {
	return (
		<div className="page">
			<Welcome
				title="Узнай, где твои друзья"
				description="Проверь местоположением своих друзей в реальном времени"/>
		</div>
	);
}

export default App;
