import UserManager from "../services/UserManager.js";



const manager = new UserManager;


/* CRUD */

export const goLogIn = async (req, res) => {
    try {
        res.render('login', {layout: 'main'})
    } catch (error) {
        res.status(500).send({status: 'EM', error: error});
    }
}

export const goRegister = async (req, res) => {
    try {
        res.render('register', {layout: 'main'})
    } catch (error) {
        res.status(500).send({status: 'EM', error: error});
    }
}

export const addUser = async (req, res) => {
    try {
        
        res.redirect('/');
    } catch (error) {
        res.status(500).send({status: 'EM', error: error});
    }
}