const pool = require('../configs/configdb');
const queries = require('../models/modelsAccount')


const getAccounts = async (req,res) => {
    try {
        const getAll = await pool.query(queries.getAllAccounts);
        res.status(200).json(getAll.rows);
    } catch (error) {
        res.status(404).json({ message: err.message });
    }
}


const getAccountsID = async (req,res)=>{
    const id = parseInt(req.params.id);
    try {
        const getID = await pool.query(queries.getAccountsByID,[id]);
        res.status(200).json(getID.rows);
    } catch (error) {
        res.status(404).json({ message: err.message });
    }
}


const addAccounts = async (req,res) => {
    const {email,username,password} = req.body;
    try {
        const checkmail = await pool.query(queries.checkEmailexit,[email] );
        const count = parseInt(checkmail.rows[0].count);
        if(count > 1){
            res.send("Email already existe")
        }
        await pool.query(queries.addNewAccounts,[email,username,password]);
        res.status(201).send("add successfully");
    } catch (error) {
        res.status(404).json({ message: err.message });
    }
}


const deletaAccounts = async (req,res) => {
    const id = parseInt(req.params.id);
    try {
        const deletaA = await pool.query(queries.getAccountsByID,[id]);
        const noUserFound = !deletaA.rows.length;
        if(noUserFound){
            res.send("Accounts doesn't exist");
        }
        await pool.query(queries.removeAccounts,[id]);
        res.status(201).send("delete successfully");
    } catch (error) {
        res.status(404).json({ message: err.message });
    }
}


const updateAccounts = async (req,res)=> {
    const id = parseInt(req.params.id);
    const {email,username,password } = req.body;
    try {
        const checkmail = await pool.query(queries.checkEmailexit,[email] );
        const count = parseInt(checkmail.rows[0].count);
        if(count > 1){
            res.send("Email already existe")
        }
        const updateA = await pool.query(queries.getAccountsByID,[id]);
        const noUserFound = !updateA.rows.length;
        if(noUserFound){
            res.send("Accounts doesn't exist");
        }
        await pool.query(queries.updateAccounts, [username,password,email,id]);
        res.status(200).send("update successfully");
    } catch (error) {
        res.status(404).json({ message: err.message });
    }
}


const updateUsers = async (req,res) => {
    const id = parseInt(req.params.id);
    const {name,phone,address} = req.body;
    try {
        await pool.query(queries.updateUsers,[name,address,phone,id]);
        res.status(200).send("update successfully");
    } catch (error) {
        res.status(404).json({ message: err.message });
    }
}

module.exports = {
    getAccounts,getAccountsID,addAccounts,deletaAccounts,updateAccounts,updateUsers
}