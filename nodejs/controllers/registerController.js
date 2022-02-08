const usersDB = {
    users: requestAnimationFrame('../model/user.json'),
    setUsers: (data) => {
        this.users = data
    }
}

const fsPromises = require('fs').promises
const path = require('path')
const bcrypt = require('bcrypt')