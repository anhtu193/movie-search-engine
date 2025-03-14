export const getPopularMovies = async () => {
	const apiKey = import.meta.env.VITE_API_KEY;
	const baseUrl = import.meta.env.VITE_BASE_URL;
	const response = await fetch(`${baseUrl}/movie/popular?api_key=${apiKey}`);
	const data = await response.json();
	return data.results;
};

export const searchMovies = async (query) => {
	const apiKey = import.meta.env.VITE_API_KEY;
	const baseUrl = import.meta.env.VITE_BASE_URL;
	const response = await fetch(
		`${baseUrl}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
			query
		)}`
	);
	const data = await response.json();
	return data.results;
};
