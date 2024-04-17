import { Router } from 'express';
import { addMovie, goToMovieList, goToProfile, getMovieWithId, getMovieByGenre } from '../controllers/movies.controllers.js';  



const movieRoutes = Router();
movieRoutes.get('/movie/:id?', getMovieWithId);
movieRoutes.post('/movie', addMovie);
movieRoutes.get('/fullmovies', goToMovieList);
movieRoutes.get('/fullmovies/genre/:genretype?', getMovieByGenre);
movieRoutes.get('/profile', goToProfile);

export default movieRoutes; 