import MoviesManager from "../services/MoviesManager.js";



const manager = new MoviesManager;



/* CRUD */

export const getMovies = async (req, res) => {
    try {
        console.log('si')
        res.render('home', {layout: 'main'})
    } catch (error) {
        res.status(500).send({status: 'EM', error: err});
    }
}

export const getMovieWithId = async (req, res) => {
    try {
        let movieId = req.params;
        const data = await manager.getMovieById()
        const dataRes = data.results
        console.log(dataRes[0])
        res.render('movielist', {movies: dataRes})
        res.render('movieid', {layout: 'main'})
    } catch (error) {
        res.status(500).send({status: 'EM', error: error});
    }
}

export const getMovieByGenre = async (req, res) => {
    try {
        const data = await manager.getMovies()
        const dataRes = data.results
        res.render('movielistgenre', {movies: dataRes})
    } catch (error) {
        res.status(500).send({status: 'EM', error: error});
    }
}

export const addMovie = async (req, res) => {
    try {
        const response = await manager.addMovie();
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send({status: 'EM', error: error});
    }
}



/* VIEWENDPOINTS */

export const goToMovieList = async (req, res) => {
    try {
        const data = await manager.getMovies()
        const dataRes = data.results
        console.log(dataRes[0])
        res.render('movielist', {movies: dataRes})
    } catch (error) {
        res.status(500).send({status: 'EM', error: error});
    }
}

export const goToProfile = async (req, res) => {
    try {
        res.render('profile', {layout: 'profile'})
    } catch (error) {
        res.status(500).send({status: 'EM', error: error});
    }   
}

