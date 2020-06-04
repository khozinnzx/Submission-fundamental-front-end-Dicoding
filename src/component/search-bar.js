class SearchBar extends HTMLElement {
	constructor() {
		super();
		this.shadowDOM = this.attachShadow({ mode: "open" });
	}

	connectedCallback() {
		this.render();
	}

	set clickEvent(event) {
		this._clickEvent = event;
		this.render();
	}

	get value() {
		return this.shadowDOM.querySelector("#searchElement").value;
	}

	render() {
		this.shadowDOM.innerHTML = `
        <style>
        .search-container {
            margin: 50px 10px;
            max-width: 700px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            padding: 16px;
            border-radius: 5px;
            display: flex;
            top: 10px;
            background-color:   rgb(43, 41, 41);
        }
        
        .search-container > input {
            width: 75%;
            padding: 16px;
            border: 0;
            border-bottom: 1px solid cornflowerblue;
            font-weight: bold;
        }
        
        .search-container > input:focus {
            outline: 0;
            border-bottom: 2px solid cornflowerblue;
        }
        
        .search-container > input:focus::placeholder {
            font-weight: bold;
        }
        
        .search-container >  input::placeholder {
            color: black;
            font-weight: normal;
        }
        
        .search-container > button {
            width: 30%;
            cursor: pointer;
            margin-left: auto;
            padding: 16px;
            background-color: grey;
            color: white;
            border: 0;
            text-transform: uppercase;
        }

        @media screen and (max-width: 900px) {
            .search-container > button {
                width: 50%;
            }
        }
        
        @media screen and (max-width: 768px){
            .search-container {
                flex-direction: column;
                position
                width: 100%;
            }
        
            .search-container > input {
                width: 100%;
                margin-bottom: 5px;
            }
        
            .search-container > button {
                width: 100%;
            }
        }
        </style>
        <div id="search-container" class="search-container">
                 <input placeholder="Search Movie" id="searchElement" type="search">
                <button id="searchButtonElement" type="submit">Search</button>
        </div>
        `;

		this.shadowDOM
			.querySelector("#searchButtonElement")
			.addEventListener("click", this._clickEvent);
	}
}

customElements.define("search-bar", SearchBar);
