class MovieItem extends HTMLElement {
	constructor() {
		super();
		this.shadowDOM = this.attachShadow({ mode: "open" });
	}

	set movie(movie) {
		this._movie = movie;
		this.render();
	}

	render() {
		this.shadowDOM.innerHTML = `
	<style>
		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}
		:host {
			display: block;
			margin-bottom: 18px;
			box-shadow: 0 4px 8px 0 rgb(168, 161, 161);
			border-radius: 10px;
			overflow: hidden;
		}
	   
		.image-movie {
			object-position: center;
		}
	   
		.movie-info {
			padding: 20px;
		}
	   
		.movie-info > h2 {
			color:white;
			font-weight: lighter;
		}
	   
		.movie-info > p {
			color: white;
			margin-top: 10px;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 10; /* number of lines to show */
		}
	</style>
	<img class="image-movie" src="https://image.tmdb.org/t/p/w185${this._movie.poster_path}">
	<div class="movie-info">
		<h2>${this._movie.title}</h2>
		<p>${this._movie.overview}</p>
	</div>`;
	}
}

customElements.define("movie-item", MovieItem);
