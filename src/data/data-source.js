class DataSource {
	static searchMovie(keyword) {
		return fetch(
			`
            https://api.themoviedb.org/3/search/movie?api_key=9dbaac0f741ae7fafd62c84d975833dc&language=en-US&query=${keyword}&page=1&include_adult=false`
		)
			.then((response) => {
				return response.json();
			})
			.then((responseJson) => {
				if (responseJson.results) {
					console.log("oleh");
					return Promise.resolve(responseJson.results);
				} else {
					return Promise.reject(`${keyword}is not found`);
				}
			});
	}
}

export default DataSource;
