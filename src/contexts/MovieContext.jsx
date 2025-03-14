import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		const storedFavs = localStorage.getItem("favorites");

		if (storedFavs) {
			setFavorites(JSON.parse(storedFavs));
		}
	}, []); // Load favorites from local storage when the app starts

	// Anytime the favorites array changes, we will update the local storage
	useEffect(() => {
		localStorage.setItem("favorites", JSON.stringify(favorites));
	}, [favorites]);

	const addToFavorites = (movie) => {
		setFavorites((favorites) => [...favorites, movie]);
	};

	const removeFromFavorites = (movieId) => {
		setFavorites((favorites) =>
			favorites.filter((movie) => movie.id !== movieId)
		);
	};

	const isFavorite = (movieId) => {
		return favorites.some((movie) => movie.id === movieId);
	};

	const value = {
		favorites,
		addToFavorites,
		removeFromFavorites,
		isFavorite,
	};

	return (
		<MovieContext.Provider value={value}>{children}</MovieContext.Provider>
	);
};
