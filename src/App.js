import './App.css';
import HeaderBar from './HeaderBar';
import SideMenu from './SideMenu';
import Main from './Main';

function App() {
	return (
		<div className="App">
			<div className="row">
				<HeaderBar />
				<SideMenu />
				<Main />
			</div>
		</div>
	);
}

export default App;
