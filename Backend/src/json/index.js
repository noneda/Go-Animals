var { ncrypt } = require('ncrypt-js')
const json = require('./index.json')

var KEY = new ncrypt(json.KEY)
var KEYS = new ncrypt(json.KEYS)

const Token = () => {
    var rand = () => {
        return Math.random().toString(36).substr(2); // remove `0.`
    };

    var token = ( ) => {
        return rand() + rand() + rand() + "-" + rand() + rand() + rand(); // to make it longer
    };

    console.log(token());
}

const datas = {
    data: "Hello WORD!",
    data1: "Other"
  };
  
  function encryptObject(obj, keyEncrypt, valueEncrypt) {
    const encryptedObj = {};
    for (const [key, value] of Object.entries(obj)) {
      const encryptedKey = keyEncrypt(key);
      const encryptedValue = valueEncrypt(value);
      encryptedObj[encryptedKey] = encryptedValue;
    }
    return JSON.stringify(encryptedObj);
  }
  
  const encryptedJson = encryptObject(datas, KEY.encrypt, KEYS.encrypt);
  console.log(encryptedJson);
  


var data = KEY.encrypt("data")
var Other = KEYS.encrypt("HELLO WORD!")
var data1 = KEY.encrypt("data1")
var Other1 = KEYS.encrypt("Other!")

const jsonEncryptAll = `{"${data}" : "${Other}", "${data1}" : "${Other1}"}`;


const newjson = JSON.stringify(JSON.parse(jsonEncryptAll))

const regexKeys = /"([^"]+?)":/g;
let match;
const keys = [];

while ((match = regexKeys.exec(newjson)) !== null) {
  keys.push(match[1]);
}

keys.forEach((item) => {
    console.log(KEY.decrypt(item))
})

const regexValues = /:"([^"]+?)"/g;
const values = [];

while ((match = regexValues.exec(newjson)) !== null) {
  values.push(match[1]);
}

values.map((item) => {
    console.log(KEYS.decrypt(item))
})