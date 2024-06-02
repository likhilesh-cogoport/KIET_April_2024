const userModel = require("../models/userModel");

const signup = async (req, res) => {
    try{
        const {email, password} = req.body;
        if(!email || !password) {
            return res.status(401).json({
                status: 'fail',
                message: "Invalid email or password",
            })
        }
    
        const user = await userModel.create({email, password});
        
        res.status(201).json({
            status: 'success',
            data:{
                user: user,
            }
        })
    }
    catch(err){
        res.status(500).json({
            status: 'fail',
            message: err?.message,
        })
    }
}

module.exports = {
    signup
}