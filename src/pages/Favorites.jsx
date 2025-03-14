import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../contexts/MovieContext";
import "../styles/Favorites.css";

function Favorites() {
	const { favorites } = useMovieContext();

	if (favorites.length > 0) {
		return (
			<div className="favorites">
				<h2>Your Favorite Movies</h2>
				<div className="movies-grid">
					{favorites.map((movie) => (
						<MovieCard
							key={movie.id}
							movie={movie}
						/>
					))}
				</div>
			</div>
		);
	}

	return (
		<div className="favorites-empty">
			<h2>No favorite movies yet!</h2>
			<p>Start adding movies to your favorites!</p>
		</div>
	);
}

export default Favorites;
