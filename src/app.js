import dotenv from 'dotenv'
dotenv.config({ path: '../.env' })
import express from "express";
import mongoose from 'mongoose';
import __dirname from './utils.js';
import { engine } from 'express-handlebars';

// ROUTES IMPORT



 




// CONFIG

const app = express();
const PORT = process.env.PORT || 8080;




app.use('/public', express.static(`${__dirname}/public`));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');








// MAIN APP


app.use('/', (req, res) => {
    res.render('home', {layout: 'main'})
}); 


try {
    await mongoose.connect(`${process.env.MONGOOSE_URL}`).then(() => {console.log('connected to Mongo!')}) 

    app.listen(PORT, () => console.log(`its aliveee! on http://localhost:${PORT}`));

} catch(err) {
    console.log(err.message);
}