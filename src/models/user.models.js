import mongoose from 'mongoose';


mongoose.pluralize(null);
const collection = 'users';

const schema = new mongoose.Schema({
    id: Number,
    title: { type: String, required: true },
    username: {
        type: String,
        unique: true,
        required: true,
      },
    password: {
        type: String,
        minlength: 6,
        required: true,
      }
});


const userModel = mongoose.model(collection, schema);

export default userModel;