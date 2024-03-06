



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
            const APIKEY = process.env.API_KEY; 
            const data =fetch(`${APIKEY}`)
            .then(response => response.json())
            return data
        } catch (error) {
            this.status = -1;
            console.log(err)
        }   
    }

    getMovieById = async() => {
        try {
            const APIKEY = process.env.API;
            const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: `Bearer ${APIKEY}`
                }
              };
            const data = fetch('https://api.themoviedb.org/3/movie/movie_id?language=en-US', options)
              .then(response => response.json())
              .then(response => console.log(response))
            return data
        } catch (error) {
            this.status = -1;
            console.log(error)
        }
    }
}

export default MoviesManager