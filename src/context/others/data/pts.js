import axios from "axios"

const gtsks = async()=>{
  return  axios(
        {
            method:'GET',
            baseURL:'https://todos-go.herokuapp.com/api/todos',
            responseType:'json'
        }
    )

}

export {gtsks}