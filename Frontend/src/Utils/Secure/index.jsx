import CryptoJS from "crypto-js"

let Key = `~IxAC/k]B_1d&g+` 
let Value =`x6X9;C'-<0N<YN9`


export const Encrypt = (item) => {
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




export const Decrypt = (item) => {
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

export const MAC = () => {
    /*
    network.get_active_interface((err, obj) => {
        console.log(obj)
        return (obj.mac_addres)
      })
      */
    return "D0:3C:1F:08:79:9C"
}