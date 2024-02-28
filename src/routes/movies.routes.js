import { Router } from 'express';
import { addMovie, getMovies, goToMovieList, goToProfile, getMovieWithId  } from '../controllers/movies.controllers.js';  



const movieRoutes = Router();

movieRoutes.get('/movie', getMovies);
movieRoutes.get('/movie/:id?', getMovieWithId);
movieRoutes.post('/movie', addMovie);
movieRoutes.get('/fullmovies', goToMovieList);
movieRoutes.get('/profile', goToProfile);

export default movieRoutes; 