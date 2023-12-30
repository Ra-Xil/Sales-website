const pool = require('../configs/configdb');
const queries = require('../models/modelsUsers')

const getUsers = (req, res) => {
    pool.query(queries.getAllUsers, (error, result) => {
        if (error) throw error;
        res.status(200).json(result.rows);
    })
}

const getUsersID = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getUsersByID, [id], (error, result) => {
        if (error) throw error;
        res.status(200).json(result.rows);
    })
}

const addUsers = (req, res) => {
    const { email, username, password } = req.body;
    pool.query(queries.checkEmailexit, [email], (error, results) => {
        if (results.rows.length) {
            res.send("Email already exists")
        }
        pool.query(queries.addNewUsers, [email, username, password], (error, result) => {
            if (error) throw error;
            res.status(201).send("add successfully");
        })
    })
}

const deletaUsers = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getUsersByID, [id], (error, results) => {
        const noUsersFound = !results.rows.length;
        if (noUsersFound) {
            res.send("Users does not exist")
        }

        pool.query(queries.removeUSers, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("dalete successfully");
        })
    })
}

const updateUsers = (req, res) => {
    const  id = parseInt(req.params.id);

    const { email, username, password } = req.body;
    pool.query(queries.getUsersByID, [id], (error, results) => {
        const noUsersFound = !results.rows.length;
        if (noUsersFound) {
            res.send("Users does not exist")
        }

        pool.query(queries.update, [username ,id], (error, results) => {
            if (error) throw error;
            res.status(200).send("update successfully");
        })
    })
    
}

module.exports = {
    getUsers,
    getUsersID,
    addUsers,
    deletaUsers,
    updateUsers,
}