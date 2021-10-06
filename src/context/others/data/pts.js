import axios from "axios"

const gtsks = async()=>{
  return await axios(
        {
            method:'GET',
            baseURL:'https://todos-go.herokuapp.com/api/todos',
            responseType:'json'
        }
    )

}


const dtsks = async (id)=>{
    return await axios (
        {
            method:'DELETE',
            baseURL:'https://todos-go.herokuapp.com/api/todos',
            url:id
        }
    )
}

const settsks = async (data)=>{
    return await axios(
        {
            method:'POST',
            baseURL:'https://todos-go.herokuapp.com/api',
            url:'/todos',
            data:data
        }
    )
}

const uptsks = (data)=>{
    axios({
        method:'POST',
        baseURL:'https://todos-go.herokuapp.com/api',
        url:'/todos',
        data:data
    })
}

export {gtsks, dtsks, settsks, uptsks}

