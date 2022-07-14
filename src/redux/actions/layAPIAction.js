import axios from "axios"




export const layAPIAction = async (dispatch) =>{
    try{
        const result = await axios.get('https://621e368a849220b1fc93323b.mockapi.io/Dressingroom')
        dispatch({
            type:"GET_API",
            arrSP:result.data
        })
    }
    catch{
        console.log('loi');
    }
}