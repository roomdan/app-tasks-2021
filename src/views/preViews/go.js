import { useEffect, useState } from "react"
import "./go.css"

const Go = ({none, start})=>{

    const [op, setOp] = useState('0%')

  useEffect(()=>{
    if(start){
        setOp('100%')
    }
  },[start])

    return <div style={{opacity:op}} className='transition w-screen h-screen bg-white flex justify-center items-center'>
            <button onClick={()=>{none(false)}}><h1 className='title'> Are you ready? </h1></button>
    </div>
}

export default Go