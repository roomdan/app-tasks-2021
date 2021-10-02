import { useEffect } from "react"
import { useState } from "react/cjs/react.development"
import "./go.css"

const Go = ({none, start})=>{

    const [op, setOp] = useState('0%')

  useEffect(()=>{
    if(start){
        setOp('100%')
    }
  },[start])

    return <div style={{opacity:op}} className='transition w-screen h-screen bg-white flex justify-center items-center'>
            <button onClick={()=>{none(false)}}><h1 className='title'> We start? </h1></button>
    </div>
}

export default Go