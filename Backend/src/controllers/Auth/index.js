/*
 *  Controllers for Autentication 
 *  Where
 *      -> Create Token
 *      -> Veryfy Token
 *      -> Encrypt  Data
 *      -> Decrypt  Data
*/

// * PUT
const Token = async (req, res) => {
    const {
        get
    }  = req.body;
    try{
        await res.status(200).json({
            message : "Succesful!"
        })
    }catch(err){
        await res.status(500).json({
            message : "Failure!"
        })
    }
}

// * POST
const Check = async (req, res) => {
    const {
        get
    } = req.body;
    try{
        await res.status(200).json({

        })
    }catch(err){
        await res.status(500).json({
            
        })
    }
}

// * POST
const Encrypt = async (req , res) => {
    const {
        get
    }  = req.body;
    try{
        await res.status(200).json({
            message : "Succesful!"
        })
    }catch(err){
        await res.status(500).json({
            message : "Failure!"
        })
    }
}

// * POST
const EncryptR = async (req, res) => {
    const {
        get
    }  = req.body;
    try{
        await res.status(200).json({
            message : "Succesful!"
        })
    }catch(err){
        await res.status(500).json({
            message : "Failure!"
        })
    }
}

module.exports = { 
    Token,
    Encrypt, 
    EncryptR,
    Check
}