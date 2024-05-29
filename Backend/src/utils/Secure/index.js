const CryptoJS = require("crypto-js");

const {getConfig} = require('../../config');
const conf = getConfig()

let Key = conf.conection.PORT ? conf.KEY :`~IxAC/k]B_1d&g+` 
let Value = conf.conection.PORT ? conf.SECRET :`x6X9;C'-<0N<YN9`

const Encrypt = (item) => {
    const iv = CryptoJS.lib.WordArray.random(16);

    return Array.isArray(item) ? (item.map(obj => JSON.parse(JSON.stringify(
        Object.fromEntries(
            Object.entries(obj).map(
                ([key, value]) => [
                    CryptoJS.AES.encrypt(key, Key, { iv }).toString(), 
                    CryptoJS.AES.encrypt(value, Value, { iv }).toString()
                ]
            )
        )
    )))) : (JSON.parse(JSON.stringify(
        Object.fromEntries(
            Object.entries(item).map(
                ([key, value]) => [
                    CryptoJS.AES.encrypt(key, Key, { iv }).toString(), 
                    CryptoJS.AES.encrypt(value, Value, { iv }).toString()
                ]
            )
        )
    )));
}




const Decrypt = (item) => {
    return Array.isArray(item) ? (item.map(obj => JSON.parse(JSON.stringify(
        Object.fromEntries(
            Object.entries(obj).map(
                ([key, value]) => [
                    CryptoJS.AES.decrypt(key, Key).toString(CryptoJS.enc.Utf8), 
                    CryptoJS.AES.decrypt(value, Value).toString(CryptoJS.enc.Utf8)
                ]
            )
        )
    )))) : (JSON.parse(JSON.stringify(
        Object.fromEntries(
            Object.entries(item).map(
                ([key, value]) => [
                    CryptoJS.AES.decrypt(key, Key).toString(CryptoJS.enc.Utf8), 
                    CryptoJS.AES.decrypt(value, Value).toString(CryptoJS.enc.Utf8)
                ]
            )
        )
    )));
    
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