const { ncrypt } = require('ncrypt-js')

const {getConfig} = require('../../config');
const conf = getConfig()

let Key = new ncrypt(conf.conection.PORT ? conf.KEY :`~IxAC/k]B_1d&g+`) 
let Value = new ncrypt(conf.conection.PORT ? conf.SECRET :`x6X9;C'-<0N<YN9`)

const Encrypt = (item) => {
    return JSON.parse(JSON.stringify(
        Object.fromEntries(
            Object.entries(item).map(
                ([key, value]) => [Key.encrypt(key), Value.encrypt(value)]
            )
        )
    ));
}

const Decrypt = (item) => {
    return JSON.parse(JSON.stringify(
        Object.fromEntries(
            Object.entries(item).map(
                ([key, value]) => [Key.decrypt(key), Value.decrypt(value)]
            )
        )
    ));
}

/* 
 * This a Separate with Regular expressions
 ! BUT Apparently I didn't need them >:)
*/

const Separate = (item, type) => {
    const regex = type ? /"([^"]+?)":/g : /:"([^"]+?)"/g
    let match;
    const data = [];
    while ((match = regex.exec(item)) !== null) {
        data.push(match[1]);
    }

    return data
}

const Token = () => {
    return new Promise((res, rej) =>{
        try{
            var rand = () => {return Math.random().toString(36).substr(2)}
            res(rand() + rand() + rand() + "-" + rand() + rand() + rand())
        }catch(err){
            rej(err)
        }
    })
}



module.exports = {
    Encrypt,
    Decrypt,
    Token
}