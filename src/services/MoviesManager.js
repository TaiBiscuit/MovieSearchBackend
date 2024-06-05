



class MoviesManager {
    constructor () {
        this.status = 1
    }

    addMovie = async () => {
        try {
            const a = 'a'
            return a
        } catch (error) {
            this.status = -1;
            console.log(err)
        }
    }

    getMovies = async() => {
        try {
            const APIKEY = process.env.API_ID; 
            const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: `Bearer ${APIKEY}`
                }
              };
              const data = fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
                .then(response => response.json())
                return data

        } catch (error) {
            this.status = -1;
            console.log(err)
        }
    }

    getAllMovies = async() => {
        try {
            const APIKEY = process.env.API_ID; 
            const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: `Bearer ${APIKEY}`
                }
              };
            const data =fetch(`https://api.themoviedb.org/3/trending/movie/day?language=en-US`, options)
            .then(response => response.json())
            return data
        } catch (error) {
            this.status = -1;
            console.log(err)
        }   
    }

    getMovieById = async(movieId) => {
        try {
            const APIKEY = process.env.API_ID
            const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: `Bearer ${APIKEY}`
                }
            };
            const data = fetch(`https://api.themoviedb.org/3/movie/${movieId.id}?language=en-US`, options)
            .then(response => response.json())
            return data

        } catch (error) {
            this.status = -1;
            console.log(error)
        }
    }
}

export default MoviesManager