import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { getPopularMovies, searchMovies } from "../services/api";
import "../styles/Home.css";

function Home() {
	const [searchQuery, setSearchQuery] = useState("");
	const [movies, setMovies] = useState([]);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [heading, setHeading] = useState("Popular Movies");
	useEffect(() => {
		const loadPopularMovies = async () => {
			try {
				const popularMobvies = await getPopularMovies();
				setMovies(popularMobvies);
			} catch (error) {
				console.log(error);
				setError("Failed to load movies");
			} finally {
				setIsLoading(false);
			}
		};

		loadPopularMovies();
	}, []); // [] means it will run only once

	const handleSearch = async (e) => {
		e.preventDefault();
		if (!searchQuery.trim()) {
			return;
		}
		if (isLoading) {
			return;
		}
		setIsLoading(true);
		try {
			const searchResults = await searchMovies(searchQuery);
			setMovies(searchResults);
			setError(null);
		} catch (error) {
			console.log(error);
			setError("Failed to search movies");
		} finally {
			setIsLoading(false);
		}

		setSearchQuery("");
		setHeading("Search Results");
	};

	return (
		<div className="home">
			<form
				onSubmit={handleSearch}
				className="search-form"
			>
				<input
					type="text"
					placeholder="Search for a movie..."
					className="search-input"
					value={searchQuery}
					onChange={(e) =>
						setSearchQuery(e.target.value.toLowerCase())
					}
				/>
				<button
					type="submit"
					className="search-button"
				>
					Search
				</button>
			</form>

			{error && <div className="error-message">{error}</div>}

			{/* {isLoading && <div className="loading">Loading...</div>} */}
			<h2 style={{ marginLeft: "12px" }}>{heading}</h2>
			<div className="movies-grid">
				{movies.map((movie) => (
					<MovieCard
						key={movie.id}
						movie={movie}
					/>
				))}
			</div>
		</div>
	);
}

export default Home;
