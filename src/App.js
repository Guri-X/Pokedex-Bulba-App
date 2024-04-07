import { Home } from "./components/Home";

function App() {
	return (
		<div className="bg-blue-300">
			<div className="navbar">
				<span className="btn bg-blue-500 text-yellow-500 text-xl border-4 border-yellow-500">Pokedex Bulba</span>
			</div>

            <div className="border-b-4 border-blue-500 mx-2 mt-2"></div>

			<Home />
		</div>
	);
}

export default App;
