import { Route, Routes } from "react-router-dom";
import MovieCard from "./components/MovieCard";
import NavBar from "./components/NavBar";
import { MovieProvider } from "./contexts/MovieContext";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import "./styles/App.css";

function App() {
	return (
		<>
			<MovieProvider>
				<NavBar />
				<main className="main-content">
					<Routes>
						<Route
							path="/"
							element={<Home />}
						/>
						<Route
							path="/favorites"
							element={<Favorites />}
						/>
					</Routes>
				</main>
			</MovieProvider>
		</>
	);
}

export default App;
