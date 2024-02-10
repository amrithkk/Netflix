// API key from TMDB
const api = "2a941b8295465e20f53655c4e84b6495";

// Base URL of the site
const base_url = "https://api.themoviedb.org/3";

// Base URL for movie images
const banner_url = "https://image.tmdb.org/t/p/original";
const img_url = "https://image.tmdb.org/t/p/w300";

// Requests for movie data
const requests = {
    fetchTrending: `${base_url}/trending/all/week?api_key=${api}&language=en-US`,
    fetchNetflixOriginals: `${base_url}/discover/tv?api_key=${api}&with_networks=213`,
    fetchActionMovies: `${base_url}/discover/movie?api_key=${api}&with_genres=28`,
    fetchComedyMovies: `${base_url}/discover/movie?api_key=${api}&with_genres=35`,
    fetchHorrorMovies: `${base_url}/discover/movie?api_key=${api}&with_genres=27`,
    fetchRomanceMovies: `${base_url}/discover/movie?api_key=${api}&with_genres=10749`,
    fetchDocumentaries: `${base_url}/discover/movie?api_key=${api}&with_genres=99`,
};

// Function used to truncate the string
function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

// Fetch Netflix originals and display one of them
fetch(requests.fetchNetflixOriginals)
    .then((res) => res.json())
    .then(data => {
        console.log(data.results);
        // Select a random movie from the fetched data
        const setMovie = data.results[Math.floor(Math.random() * data.results.length-1)];

        // Update banner section with movie details
        var banner = document.getElementById("banner");
        var banner_title = document.getElementById("banner_title");
        var banner_desc = document.getElementById("banner_description");

        banner.style.backgroundImage = `url(${banner_url}${setMovie.backdrop_path})`;
        banner_desc.innerText = truncate(setMovie.overview, 150);
        banner_title.innerText = setMovie.name;
    })
    .catch(error => {
        console.error("Error fetching Netflix originals:", error);
    });


// movie rows
fetch(requests.fetchNetflixOriginals)
    .then((res) => res.json())

    .then((data) => {
        const headrow=document.getElementById("headrow");
        const row=document.createElement("div");

        row.className="row";
        row.classList.add("netflixrow");

        headrow.appendChild(row);

        const title=document.createElement("h2");
    
        title.className="row_title";
        title.innerText="NETFLIX ORIGINALS";

        row.appendChild(title);
        
        const row_posters = document.createElement("div");
        row_posters.className="row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie)=> {
            const poster= document.createElement("img");
            poster.className="row_posterLarge";
            
            var s=movie.name.replace(/\s+/g,"");

            poster.id=s;
            poster.src=img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });

//Trending
fetch(requests.fetchTrending)
    .then((res) => res.json())

    .then((data) => {
        const headrow=document.getElementById("headrow");
        const row=document.createElement("div");

        row.className="row";
        row.classList.add("popularrow");

        headrow.appendChild(row);

        const title=document.createElement("h2");
    
        title.className="row_title";
        title.innerText="TOP RATED";

        row.appendChild(title);
        
        const row_posters = document.createElement("div");
        row_posters.className="row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie)=> {
            const poster= document.createElement("img");
            poster.className="row_posterLarge";
            
            var s2=movie.id;

            poster.id=s2;
            poster.src=img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });

//Action
fetch(requests.fetchActionMovies)
    .then((res) => res.json())

    .then((data) => {
        const headrow=document.getElementById("headrow");
        const row=document.createElement("div");

        row.className="row";
        row.classList.add("popularrow");

        headrow.appendChild(row);

        const title=document.createElement("h2");
    
        title.className="row_title";
        title.innerText="ACTION MOVIES";

        row.appendChild(title);
        
        const row_posters = document.createElement("div");
        row_posters.className="row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie)=> {
            const poster= document.createElement("img");
            poster.className="row_posterLarge";
            
            var s3=movie.id;

            poster.id=s3;
            poster.src=img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });

//Comedy
fetch(requests.fetchComedyMovies)
    .then((res) => res.json())

    .then((data) => {
        const headrow=document.getElementById("headrow");
        const row=document.createElement("div");

        row.className="row";
        row.classList.add("popularrow");

        headrow.appendChild(row);

        const title=document.createElement("h2");
    
        title.className="row_title";
        title.innerText="COMEDY MOVIES";

        row.appendChild(title);
        
        const row_posters = document.createElement("div");
        row_posters.className="row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie)=> {
            const poster= document.createElement("img");
            poster.className="row_posterLarge";
            
            var s4=movie.id;

            poster.id=s4;
            poster.src=img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });

//Horror
fetch(requests.fetchHorrorMovies)
    .then((res) => res.json())

    .then((data) => {
        const headrow=document.getElementById("headrow");
        const row=document.createElement("div");

        row.className="row";
        row.classList.add("popularrow");

        headrow.appendChild(row);

        const title=document.createElement("h2");
    
        title.className="row_title";
        title.innerText="HORROR MOVIES";

        row.appendChild(title);
        
        const row_posters = document.createElement("div");
        row_posters.className="row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie)=> {
            const poster= document.createElement("img");
            poster.className="row_posterLarge";
            
            var s5=movie.id;

            poster.id=s5;
            poster.src=img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });


//Romance
fetch(requests.fetchRomanceMovies)
    .then((res) => res.json())

    .then((data) => {
        const headrow=document.getElementById("headrow");
        const row=document.createElement("div");

        row.className="row";
        row.classList.add("popularrow");

        headrow.appendChild(row);

        const title=document.createElement("h2");
    
        title.className="row_title";
        title.innerText="ROMANCE MOVIES";

        row.appendChild(title);
        
        const row_posters = document.createElement("div");
        row_posters.className="row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie)=> {
            const poster= document.createElement("img");
            poster.className="row_posterLarge";
            
            var s6=movie.id;

            poster.id=s6;
            poster.src=img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });


//Documentaries
fetch(requests.fetchDocumentaries)
    .then((res) => res.json())

    .then((data) => {
        const headrow=document.getElementById("headrow");
        const row=document.createElement("div");

        row.className="row";
        row.classList.add("popularrow");

        headrow.appendChild(row);

        const title=document.createElement("h2");
    
        title.className="row_title";
        title.innerText="DOCUMENTARY MOVIES";

        row.appendChild(title);
        
        const row_posters = document.createElement("div");
        row_posters.className="row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie)=> {
            const poster= document.createElement("img");
            poster.className="row_posterLarge";
            
            var s7=movie.id;

            poster.id=s7;
            poster.src=img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });
