import { createContext, useEffect, useState } from "react"
import { gtsks } from "./pts"

const Tasks = ({children})=>{

    const [data, setData] = useState('');

    useEffect(()=>{
        const gt = async()=>{
          const a =  await gtsks();
            setData(a.data.todos);
        }
        gt()
    },[data.length])

return (
    <GetTasks.Provider value={[data, setData]}>{children}</GetTasks.Provider>
)
    
}
export const GetTasks = createContext()
export default Tasks