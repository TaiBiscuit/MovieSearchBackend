import mongoose from 'mongoose';


mongoose.pluralize(null);
const collection = 'products';

const schema = new mongoose.Schema({
    id: String,
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required:true },
    image: { type: String, required: true },
    stock: Number,
    code: Number
});

schema.plugin(mongoosePaginate);

const moviesModel = mongoose.model(collection, schema);

export default moviesModel;