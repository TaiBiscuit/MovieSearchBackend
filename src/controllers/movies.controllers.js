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


export const addMovie = async (req, res) => {
    try {
        const response = await manager.addMovie();
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send({status: 'EM', error: err});
    }
}



/* VIEWENDPOINTS */

export const goToMovieList = async (req, res) => {
    try {
        const finalArray = [];
        const data = await manager.getMovies()
        const dataRes = data.results
        dataRes.forEach(element => {
            finalArray.push(element.title)
        });
        res.render('movielist', {movies: dataRes})
    } catch (error) {
        res.status(500).send({status: 'EM', error: error});
    }
}

export const goToProfile = async (req, res) => {
    try {
        res.render('profile', {layout: 'main'})
    } catch (error) {
        res.status(500).send({status: 'EM', error: err});
    }   
}