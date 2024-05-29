import axios from "../config";
import { Decrypt } from "../../Utils/Secure";

export const getStatus = async () => {
    try{
        const res = await axios.get('Prod/status')
        if(res.status === 200){
            const {set} = res.data
            const send = Decrypt(set)
            return send.slice().sort((a, b) => b.number - a.number);
            
        }
    }catch(err){
        console.log(err)
    }
}
export const getBoxItems = async () => {
    try{
        const res = await axios.get('Prod/boxs')
        if(res.status === 200){
            const {set} = res.data
            const send = Decrypt(set)
            return send
        }

    }catch(err){
        console.log(err)
    }
}

export  const boxItems = {
    get : [
{
    "backgroundFondo": "#E9F7EF",
    "backgroundProgr": "#48C9B0",
    "Product": "DOG CHOW",
    "Section": "PURINA",
    "Units": 12,
    "UnitsL": 15,
    "Quantitylot": 80,
    "Lote": 1,
    "Type": "GATO",
    "Value": 9500
}
    ]
};
  

