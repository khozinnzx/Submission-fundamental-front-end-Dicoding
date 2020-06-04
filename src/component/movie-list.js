import "./movie-item";

class MovieList extends HTMLElement {
	constructor() {
		super();
		this.shadowDOM = this.attachShadow({ mode: "open" });
	}

	set movies(movies) {
		this._movies = movies;
		this.render();
	}

	renderError(message) {
		this.shadowDOM.innerHTML = `
        <style>
        .placeholder {
			display: flex;
			flex-direction:center;
			align-items: flex-start;
			flex-wrap: wrap;
        }
    </style>`;
		this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
	}

	render() {
		this.shadowDOM.innerHTML = ``;
		this._movies.forEach((movie) => {
			const movieItemElement = document.createElement("movie-item");
			movieItemElement.movie = movie;
			this.shadowDOM.appendChild(movieItemElement);
		});
	}
}

customElements.define("movie-list", MovieList);
