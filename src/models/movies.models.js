import mongoose from 'mongoose';


mongoose.pluralize(null);
const collection = 'movies';

const schema = new mongoose.Schema({
    id: Number,
    title: String
});


const moviesModel = mongoose.model(collection, schema);

export default moviesModel;