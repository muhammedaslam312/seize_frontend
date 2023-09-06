import axios from "axios";
import BaseUrl from "../config/BaseUrl";

export const getAllUsers= (queryParams)=>{

    return new Promise((resolve,reject)=>{

        const apiUrl = `${BaseUrl}api/users/?${new URLSearchParams(queryParams).toString()}`;

        axios.get(apiUrl).then((response)=>{
            console.log(response.data);
            console.log("getallusers Axios working");
            resolve(response.data)
        }).catch((err) => {
            console.log("getallusers Axios Not working");
            reject(err)
         })
        })
}

