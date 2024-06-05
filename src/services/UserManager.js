import userModel from '../models/user.models.js';


class UserManager {
    constructor () {
        this.status = 1
    }

    getUsers = async() => {
        try {
            userModel.find();
        } catch (error) {
            this.status = -1;
            console.log(err)
        }
    }

    saveUser = async(username, password) => {
        try {
            return await userModel.create({username: username, password:password, savedList:[]}) 
        } catch (error) {
            this.status = -1;
            console.log(err)
        }
    }
}

export default UserManager