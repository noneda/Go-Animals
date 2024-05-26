const {Decrypt, Encrypt, Token} = require('../../utils/Secure') 

const {getConfig} = require('../../config');
const conf = getConfig()

// * POST
const LogIn = async (req, res) => {
    const {
        get
    }  = req.body;

    console.log(get)
    try{
        const decrypt = Decrypt(get)
        console.log(decrypt)
        if(decrypt.MAC === conf.MAC){
            const token = await Token()
            req.session.key =  token
            res.status(200).json({
                message : "Successful Login",
                set : {
                    token : token
                }
            })
        }else{
            res.status(400).json({
                message : "Login Failure",
            })
        }
        console.log(req.session.key)

    }catch(err){
        res.status(500).json({
            message : "Failure!",
            err : err
        })
    }
}

// * POST

const LogOut = async (req, res) => {
    try{
        console.log(req.session.key)
       await req.session.destroy(err => {
            if(err){
                res.status(400).json({
                        message : "Failed to log out" 
                    })
            }
            res.status(200).json({
                message : "Succesful to log out"
            })
        }) 
    }catch(err){
        res.status(500).json({
            message : "Failed to log out" ,
            err : err
        })
    }
}


// * POST
const Check = async (req, res) => {
    const {
        token
    } = req.body;
    try{
        if (req.session.key === token) {
            res.status(200)

          } else {
            res.status(400).json({
                message : "Please login first"
            });
          }        
    }catch(err){
        res.status(500).json({
            message : "Failed to Check",
            err : err
        })
    }
}

module.exports = { 
    LogIn,
    LogOut,
    Check
}