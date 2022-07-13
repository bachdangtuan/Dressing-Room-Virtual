import axios from "axios"




export const layAPIAction = async () =>{
    try{
        const result = await axios.get('https://621e368a849220b1fc93323b.mockapi.io/Dressingroom')
        console.log(result);
    }
    catch{
        console.log('loi');
    }
}