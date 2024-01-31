



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
}

export default MoviesManager