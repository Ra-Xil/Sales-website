
const getAllAccounts = "select * from accounts";
const getAccountsByID = "select * from accounts where id = $1";
// const checkEmailexit = "select s from accounts s where s.email = $1"
const checkEmailexit = "SELECT COUNT(*) FROM accounts WHERE email = $1"
const addNewAccounts = "INSERT INTO accounts (email,username,password) VALUES ($1,$2,$3)";
const removeAccounts = "DELETE FROM accounts WHERE id = $1";
const updateAccounts = "UPDATE accounts SET username=$1,password = $2,email=$3 where id = $4";
const updateUsers = "UPDATE accounts SET name=$1,address = $2,phone=$3 where id = $4";

module.exports = {
    getAccountsByID,
    getAllAccounts,
    addNewAccounts,
    removeAccounts,
    updateAccounts,
    checkEmailexit,
    updateUsers
}