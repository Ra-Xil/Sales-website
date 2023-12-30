const getAllUsers = "select * from users";
const getUsersByID = "select * from users where id = $1";
const checkEmailexit = "select s from users s where s.email = $1"
const addNewUsers = "INSERT INTO users (email,username,password) VALUES ($1,$2,$3)";
const removeUSers = "DELETE FROM users WHERE id = $1";
const update = "UPDATE users SET username = $1 where id = $2";


module.exports = {
    getAllUsers,
    getUsersByID,
    checkEmailexit,
    addNewUsers,
    removeUSers,
    update
}