// components
import { Header } from "./components/Header/Header";
import { Sidebar } from './components/Sidebar/Sidebar';

// styles
import styles from './App.module.css';
import './global.css';

function App() {

	return (
		<>
			<Header />
			<div className={styles.wrapper}>
				<Sidebar />
				<main></main>
			</div>
		</>
	);
}

export default App;
