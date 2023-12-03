import axios from "../Config/Axios";

export const doPOST = (url : string , request : any,headers ?: any) => {
    console.log(axios.defaults)
    axios.post(url,request)
}