import userModel from '../models/user.models.js';


class UserManager {
    constructor () {
        this.status = 1
    }

    getUsers = async() => {
        try {

        } catch (error) {
            this.status = -1;
            console.log(err)
        }
    }
}

export default UserManager