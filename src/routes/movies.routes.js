import { Router } from 'express';
import { addMovie, getMovies, goToMovieList, goToProfile  } from '../controllers/movies.controllers.js';  



const movieRoutes = Router();

movieRoutes.get('/movie', getMovies);
movieRoutes.post('/movie', addMovie);
movieRoutes.get('/fullmovies', goToMovieList);
movieRoutes.get('/profile', goToProfile);

export default movieRoutes; 